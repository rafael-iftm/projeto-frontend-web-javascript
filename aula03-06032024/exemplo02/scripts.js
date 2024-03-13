// 1º maneira de escrever a função somar: "Função declarativa"
function somarDeclarativa(x, y) {
    return x + y;
}

// 2º maneira de escrever a função somar: "Função literal"
// -> Atribui a uma variavel
var somarLiteral = function somar(x, y) {
    return x + y;
}

// 3º maneira de escrever a função somar: "Função anônima"
// -> Remove o nome da função
var somarAnonima = function (x, y) {
    return x + y;
}

// 4º maneira de escrever a função somar: "Arrow function"
// -> Remove o function e adiciona a arrow
var somarArrow = (x, y) => {
    return x + y;
}

// Maneira mais simplificada de escrever uma "Arrow function"
// -> Quando a função consiste em apenas uma instrução de retorno, você pode omitir tanto as chaves {} quanto a palavra-chave return
var somarArrowSimplificada = (x, y) => x + y;

function iniciar() {
    console.log(somarDeclarativa(10, 20));
    console.log(somarLiteral(10,20));
    console.log(somarAnonima(10,20));
    console.log(somarArrow(10, 20));
    console.log(somarArrowSimplificada(10, 20));
}

window.addEventListener("load", iniciar);
