document.addEventListener('DOMContentLoaded', function() {
    var movieResults = document.getElementById('movie-results');
    var movieInfoBox = document.getElementById('movie-info-box');

    var apiKey = config.apiKey;

    var apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar filmes');
        }
        return response.json();
    })
    .then(data => {
        var movies = data.results.slice(0, 10);

        movies.forEach(movie => {
            var posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            var rating = movie.vote_average.toFixed(1);
            var overview = movie.overview.length > 180 ? movie.overview.substring(0, 180) + '...' : movie.overview;

            var movieCard = `
                <div class="movie-card" data-title="${movie.title}" data-rating="${rating}" data-genres="${getGenres(movie.genre_ids)}" data-overview="${overview}">
                    <img src="${posterUrl}" alt="${movie.title}" class="movie-poster">
                </div>
            `;

            movieResults.innerHTML += movieCard;
        });

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

        // Exibir informações ao passar o mouse sobre o cartão do filme
        $('.movie-card').hover(function() {
            var title = $(this).data('title');
            var rating = $(this).data('rating');
            var genres = $(this).data('genres');
            var overview = $(this).data('overview');

            $(movieInfoBox).html(`
                <h3>${title}</h3>
                <p><strong>Classificação:</strong> ${rating}</p>
                <p><strong>Gêneros:</strong> ${genres}</p>
                <p><strong>Sinopse:</strong> ${overview}</p>
            `);
        });
    })
    .catch(error => {
        movieResults.innerHTML = `<p>${error.message}</p>`;
    });

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
        };

        var genres = genreIds.map(id => {
            return genreMap[id];
        });

        return genres.join(', ');
    }
});
