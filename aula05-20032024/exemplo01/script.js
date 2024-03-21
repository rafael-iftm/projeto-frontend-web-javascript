document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('movie-form');
    var movieResults = document.getElementById('movie-results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var movieTitleInput = document.getElementById('movie-title').value.trim();
        
        if (movieTitleInput === '') {
            movieResults.innerHTML = '<p>Por favor, digite o título de um filme.</p>';
            return;
        }

        movieResults.innerHTML = '<p>Carregando resultados...</p>';

        var apiKey = config.apiKey;
        var readAccessTokenApi = config.readAccessTokenApi;

        var apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieTitleInput)}&api_key=${apiKey}`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${readAccessTokenApi}`,
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar filmes');
            }
            return response.json();
        })
        .then(data => {
            if (data.results.length === 0) {
                movieResults.innerHTML = '<p>Nenhum filme encontrado com esse título.</p>';
                return;
            }

            var moviesList = '<ul>';
            data.results.forEach(movie => {
                if (movie.title.toLowerCase() === movieTitleInput.toLowerCase()) {
                    moviesList += `<li>${movie.title} (${movie.release_date.split('-')[0]})</li>`;
                }
            });
            moviesList += '</ul>';

            movieResults.innerHTML = moviesList;
        })
        .catch(error => {
            movieResults.innerHTML = `<p>${error.message}</p>`;
        });
    });
});
