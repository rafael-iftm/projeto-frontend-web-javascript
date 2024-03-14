// Abordagem utilizando XMLHttpRequest
document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById('botao');
    var texto = document.getElementById('demo');

    botao.addEventListener('click', function() {
        // Inicia uma requisição assíncrona usando XMLHttpRequest
        var xhttp = new XMLHttpRequest();
        
        // Define uma função para lidar com o evento de mudança de estado da requisição
        xhttp.onreadystatechange = function() {
            // Verifica se a requisição foi concluída e se o status da resposta é 200 (OK)
            if (this.readyState == 4 && this.status == 200) {
                // Atualiza o conteúdo do elemento de texto com a resposta da requisição
                texto.textContent = xhttp.responseText;
            }
        };
        
        // Abre a conexão com o servidor, especificando o método (GET), o URL do recurso e se a requisição é assíncrona (true)
        xhttp.open("GET", "files/bd.txt", true);
        
        // Envia a requisição ao servidor
        xhttp.send();
    });
});
