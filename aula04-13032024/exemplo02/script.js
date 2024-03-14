// Abordagem utilizando Fetch API
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('botao');
    var texto = document.getElementById('demo');

    botao.addEventListener('click', function() {
        // Faz uma requisição assíncrona usando Fetch API
        fetch('files/data.json')
            .then(response => {
                // Verifica se a resposta da requisição foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                // Converte a resposta para JSON
                return response.json();
            })
            .then(data => {
                // Obtém a descrição do primeiro usuário na lista
                var descricaoPrimeiroUsuario = data.usuarios[0].descricao;
                
                // Atualiza o conteúdo do elemento de texto com a descrição do primeiro usuário
                texto.textContent = descricaoPrimeiroUsuario;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });
});
