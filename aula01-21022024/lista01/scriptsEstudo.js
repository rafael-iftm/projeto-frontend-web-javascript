// Exercicio 01:
// Funções para calcular a soma das idades de um vetor utilizando diferentes abordagens

// Versão com for loop
const somaIdadesVetorArrow = (vet) => {
    let somaIdades = 0;
    for (let i = 0; i < vet.length; i++) {
        somaIdades = somaIdades + vet[i];
    }
    return somaIdades;
}

// Versão simplificada usando reduce
const somaIdadesVetorArrowSimplificada = (vet) => vet.reduce((somaIdades, idade) => somaIdades + idade, 0);

// Função principal para o Exercício 01
function exercicio01() {
    const vetorIdades = [1, 2, 3, 4];
    console.log("Soma das idades:");
    console.log("Versão com for loop:", somaIdadesVetorArrow(vetorIdades));
    console.log("Versão com reduce:", somaIdadesVetorArrowSimplificada(vetorIdades));
}

window.addEventListener("load", exercicio01);

// Exercicio 02:
// Funções para resolver diferentes partes do segundo exercício

// a) A média aritmética simples das idades

// Versão com for loop
const mediaAritmeticaSiplesVetorArrow = (vet) => {
    let somaIdades = 0;
    for (let i = 0; i < vet.length; i++) {
        somaIdades = somaIdades + vet[i];
    }
    return somaIdades / vet.length;
}

// Versão simplificada usando reduce
const mediaAritmeticaSiplesVetorArrowSimplificada = (vet) => vet.reduce((somaIdades, idade) => somaIdades + idade, 0) / vet.length;

// b) A maior idade

// Versão com for loop
const maiorIdadesVetorArrow = (vet) => {
    let maiorIdade = 0;
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > maiorIdade) {
            maiorIdade = vet[i]
        }
    }
    return maiorIdade
}

// Versão simplificada usando Math.max e spread operator
const maiorIdadesVetorArrowSimplificada = (vet) => Math.max(...vet);

// c) As idades ímpares

// Versão com for loop
const idadesImparesVetorArrow = (vet) => {
    let vetorIdadesImpares = [];
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 !== 0) {
            vetorIdadesImpares.push(vet[i]);
        }
    }
    return vetorIdadesImpares;
}

// Versão simplificada usando filter
const idadesImparesVetorArrowSimplificada = (vet) => vet.filter(idade => idade % 2 !== 0);

// d) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false

// Versão com for loop
const maiorDezoitoVetorArrow = (vet) => {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < 18) {
            return false
        } else {
            return true
        }
    }
    return vetorIdadesImpares;
}

// Versão simplificada usando every
const maiorDezoitoVetorArrowSimplificada = (vet) => vet.every(idade => idade >= 18);

// Função principal para o Exercício 02
function exercicio02() {
    const vetorIdades = [1, 2, 3, 4];
    console.log("\nExercício 02:");

    console.log("a) Média das idades:");
    console.log("Versão com for loop:", mediaAritmeticaSiplesVetorArrow(vetorIdades));
    console.log("Versão com reduce:", mediaAritmeticaSiplesVetorArrowSimplificada(vetorIdades));

    console.log("b) Maior idade:");
    console.log("Versão com for loop:", maiorIdadesVetorArrow(vetorIdades));
    console.log("Versão com Math.max:", maiorIdadesVetorArrowSimplificada(vetorIdades));

    console.log("c) Idades ímpares:");
    console.log("Versão com for loop:", idadesImparesVetorArrow(vetorIdades));
    console.log("Versão com filter:", idadesImparesVetorArrowSimplificada(vetorIdades));

    console.log("d) Todos são maiores de 18 anos:");
    console.log("Versão com for loop:", maiorDezoitoVetorArrow(vetorIdades));
    console.log("Versão com every:", maiorDezoitoVetorArrowSimplificada(vetorIdades));
}

window.addEventListener("load", exercicio02);
