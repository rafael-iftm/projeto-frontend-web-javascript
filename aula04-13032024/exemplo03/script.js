// Abordagem utilizando Axios
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('botao');
    var texto = document.getElementById('demo');

    botao.addEventListener('click', function() {
        // Faz uma requisição assíncrona usando Axios
        axios.get('files/bd.txt')
            .then(response => {
                // Atualiza o conteúdo do elemento de texto com o conteúdo da resposta
                texto.textContent = response.data;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });
});
