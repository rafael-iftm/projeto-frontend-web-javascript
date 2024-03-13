function exibirNormal(x) {
    console.log(x);
}

// Definição do array vet
var vet = [1, 2, 3, 4, 5];

// Função para exibir um elemento
var exibir = (x) => console.log(x);

// Função para exibir um número duplicado se for par, triplicado se for ímpar
var exibirParDuplicadoImparTriplicado = (x, i) => (x % 2 === 0) ? console.log(`Índice ${i}: ${x * 2}`) : console.log(`Índice ${i}: ${x * 3}`);

// Função para exibir o dobro de um elemento
var dobrar = (x) => console.log(x * 2);

// Função para filtrar apenas os números pares
var filtrarPares = (x) => console.log(x % 2 === 0);

// Função para somar todos os elementos do vetor
var todosPares = (total, valor) => console.log("Total acumulado:", total + valor) || total + valor;

function iniciar() {
    vet.forEach(exibir);
    console.log("-------------");
    vet.forEach(exibirParDuplicadoImparTriplicado);
    console.log("-------------");
    vet.map(dobrar);
    console.log("-------------");
    vet.filter(filtrarPares);
    console.log("-------------");
    vet.reduce(todosPares, 0);
}

window.addEventListener("load", iniciar);
