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

        var token = process.env.API_KEY_MOVIE_DB;

        var apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${encodeURIComponent(movieTitleInput)}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes');
                }
                return response.json();
            })
            .then(data => {
                if (data.results.length === 0) {
                    movieResults.innerHTML = '<p>Nenhum filme encontrado.</p>';
                    return;
                }

                var moviesList = '<ul>';
                data.results.forEach(movie => {
                    moviesList += `<li>${movie.title} (${movie.release_date.split('-')[0]})</li>`;
                });
                moviesList += '</ul>';

                movieResults.innerHTML = moviesList;
            })
            .catch(error => {
                movieResults.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
