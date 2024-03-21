document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('cep-form');
    var resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var cepInput = document.getElementById('cep').value.trim();

        if (cepInput === '') {
            resultadoDiv.innerHTML = '<p>Por favor, digite um CEP válido.</p>';
            return;
        }

        if (!/^\d{8}$/.test(cepInput)) {
            resultadoDiv.innerHTML = '<p>O formato do CEP é inválido. Digite apenas os 8 dígitos.</p>';
            return;
        }

        fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao consultar o CEP');
                }
                return response.json();
            })
            .then(data => {
                if (data.erro) {
                    resultadoDiv.innerHTML = '<p>CEP não encontrado</p>';
                } else {
                    resultadoDiv.innerHTML = `
                        <p><strong>CEP:</strong> ${data.cep}</p>
                        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                        <p><strong>Bairro:</strong> ${data.bairro}</p>
                        <p><strong>Cidade:</strong> ${data.localidade}</p>
                        <p><strong>Estado:</strong> ${data.uf}</p>
                    `;
                }
            })
            .catch(error => {
                resultadoDiv.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
