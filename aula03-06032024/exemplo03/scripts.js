// 1º maneira de escrever a função somar: "Função declarativa"
function parOuImparDeclarativa(x) {
    if (x % 2 === 0) {
        return "É par";
    } else {
        return "É ímpar";
    }
}

// 2º maneira de escrever a função somar: "Função literal"
// -> Atribui a uma variavel
var parOuImparLiteral = function parOuImpar(x) {
    if (x % 2 === 0) {
        return "É par";
    } else {
        return "É ímpar";
    } 
}

// 3º maneira de escrever a função somar: "Função anônima"
// -> Remove o nome da função
var parOuImparAnonima = function (x) {
    if (x % 2 === 0) {
        return "É par";
    } else {
        return "É ímpar";
    } 
}

// 4º maneira de escrever a função somar: "Arrow function"
// -> Remove o function e adiciona a arrow
var parOuImparArrow = (x) => {
    if (x % 2 === 0) {
        return "É par";
    } else {
        return "É ímpar";
    } 
}

// Maneira mais simplificada de escrever uma "Arrow function"
// -> Quando a função consiste em apenas uma instrução de retorno, você pode omitir tanto as chaves {} quanto a palavra-chave return
var parOuImparArrowSimplificada = (x) => (x % 2 === 0) ? "É par" : "É ímpar";

// O operador ternário é uma forma concisa de escrever uma expressão condicional em JavaScript.
// Ele é composto por três partes: a condição, o operador "?" e dois resultados separados por ":".

// Exemplo:
// const idade = 18;
// const status = idade >= 18 ? "adulto" : "menor de idade";

// Neste exemplo, a expressão `idade >= 18` é a condição.
// Se a condição for verdadeira, o valor após o "?" é retornado (neste caso, "adulto").
// Se a condição for falsa, o valor após o ":" é retornado (neste caso, "menor de idade").

// A expressão acima é equivalente a escrever:
/*
if (idade >= 18) {
    status = "adulto";
} else {
    status = "menor de idade";
}
*/

// O operador ternário é útil para escrever expressões condicionais de forma mais concisa e legível.

function iniciar() {
    console.log(parOuImparDeclarativa(10));
    console.log(parOuImparLiteral(10));
    console.log(parOuImparAnonima(10));
    console.log(parOuImparArrow(10));
    console.log(parOuImparArrowSimplificada(10));
}

window.addEventListener("load", iniciar);
