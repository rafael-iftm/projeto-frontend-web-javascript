// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Obtém elementos do DOM pelos seus IDs
    var movieResults = document.getElementById('movie-results');
    var movieInfoBox = document.getElementById('movie-info-box');

    // Obtém a chave da API do objeto de configuração (assumindo que config é um objeto global com uma propriedade 'apiKey')
    var apiKey = config.apiKey;

    // Constrói a URL da API com a chave da API incluída
    var apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt`;

    // Faz uma requisição para a API
    fetch(apiUrl)
    .then(response => {
        // Verifica se a resposta da API é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao buscar filmes');
        }
        // Converte a resposta para JSON
        return response.json();
    })
    .then(data => {
        // Extrai os dados relevantes da resposta
        var movies = data.results.slice(0, 10);

        // Itera sobre os filmes e cria cartões para cada um
        movies.forEach(movie => {
            // Constrói a URL do pôster do filme
            var posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            // Arredonda a classificação do filme para uma casa decimal
            var rating = movie.vote_average.toFixed(1);
            // Limita o resumo do filme a 180 caracteres
            var overview = movie.overview.length > 180 ? movie.overview.substring(0, 180) + '...' : movie.overview;

            // Cria um cartão HTML para o filme com os dados relevantes
            var movieCard = `
                <div class="movie-card" data-title="${movie.title}" data-rating="${rating}" data-genres="${getGenres(movie.genre_ids)}" data-overview="${overview}">
                    <img src="${posterUrl}" alt="${movie.title}" class="movie-poster">
                </div>
            `;

            // Adiciona o cartão do filme ao contêiner de resultados de filmes
            movieResults.innerHTML += movieCard;
        });

        // Inicializa o carrossel de filmes usando a biblioteca Slick Carousel
        $('.movie-carousel').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Exibe informações detalhadas do filme ao passar o mouse sobre o cartão do filme
        $('.movie-card').hover(function() {
            var title = $(this).data('title');
            var rating = $(this).data('rating');
            var genres = $(this).data('genres');
            var overview = $(this).data('overview');

            // Insere as informações do filme na caixa de informações do filme
            $(movieInfoBox).html(`
                <h3>${title}</h3>
                <p><strong>Classificação:</strong> ${rating}</p>
                <p><strong>Gêneros:</strong> ${genres}</p>
                <p><strong>Sinopse:</strong> ${overview}</p>
            `);
        });
    })
    .catch(error => {
        // Em caso de erro na requisição, exibe uma mensagem de erro
        movieResults.innerHTML = `<p>${error.message}</p>`;
    });

    // Função auxiliar para obter os nomes dos gêneros com base em seus IDs
    function getGenres(genreIds) {
        var genreMap = {
            28: 'Ação',
            12: 'Aventura',
            16: 'Animação',
            35: 'Comédia',
            80: 'Crime',
            99: 'Documentário',
            18: 'Drama',
            10751: 'Família',
            14: 'Fantasia',
            36: 'História',
            27: 'Terror',
            10402: 'Música',
            9648: 'Mistério',
            10749: 'Romance',
            878: 'Ficção Científica',
            10770: 'Cinema TV',
            53: 'Thriller',
            10752: 'Guerra',
            37: 'Faroeste'
            // Mapeamento de IDs de gênero para seus nomes correspondentes
            // (o resto do mapeamento foi omitido para brevidade)
        };

        // Mapeia os IDs de gênero para seus nomes correspondentes usando o mapeamento definido acima
        var genres = genreIds.map(id => {
            return genreMap[id];
        });

        // Junta os nomes dos gêneros em uma string separada por vírgulas e espaços
        return genres.join(', ');
    }
});
