// Exercicio 01:
const somaIdadesVetorArrowSimplificada = vet => vet.reduce((somaIdades, idade) => somaIdades + idade, 0);

// Exercicio 02:
// a) A média aritmética simples das idades
const mediaAritmeticaSiplesVetorArrowSimplificada = vet => vet.reduce((somaIdades, idade) => somaIdades + idade, 0) / vet.length;

// b) A maior idade
const maiorIdadesVetorArrowSimplificada = vet => Math.max(...vet);

// c) As idades ímpares
const idadesImparesVetorArrowSimplificada = vet => vet.filter(idade => idade % 2 !== 0);

// d) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
const maiorDezoitoVetorArrowSimplificada = vet => vet.every(idade => idade >= 18);

// e) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
const todasMaioresIguaisAoValor = (vet, valor) => vet.every(idade => idade >= valor);

// f) Exibir todas as idades maiores ou iguais a determinada idade
const exibirMaioresIguaisAoValor = (vet, valor) => vet.filter(idade => idade >= valor);

// g) A média das idades das pessoas com idades maiores ou iguais a determinada idade
const mediaIdadesMaioresIguaisAoValor = (vet, valor) => {
    const idadesFiltradas = vet.filter(idade => idade >= valor);
    return idadesFiltradas.length > 0 ? idadesFiltradas.reduce((somaIdades, idade) => somaIdades + idade, 0) / idadesFiltradas.length : 0;
};

// Exibindo resultados no corpo da página
function exibirResultados() {
    const vetorIdades = [1, 2, 3, 4];
    const valorInformado = 3;
    const resultadoA = mediaAritmeticaSiplesVetorArrowSimplificada(vetorIdades);
    const resultadoB = maiorIdadesVetorArrowSimplificada(vetorIdades);
    const resultadoC = idadesImparesVetorArrowSimplificada(vetorIdades);
    const resultadoD = maiorDezoitoVetorArrowSimplificada(vetorIdades);
    const resultadoE = todasMaioresIguaisAoValor(vetorIdades, valorInformado);
    const resultadoF = exibirMaioresIguaisAoValor(vetorIdades, valorInformado);
    const resultadoG = mediaIdadesMaioresIguaisAoValor(vetorIdades, valorInformado);

    const body = document.getElementsByTagName('body')[0];
    const paragraphVetor = document.createElement('p');
    const paragraphA = document.createElement('p');
    const paragraphB = document.createElement('p');
    const paragraphC = document.createElement('p');
    const paragraphD = document.createElement('p');
    const paragraphE = document.createElement('p');
    const paragraphF = document.createElement('p');
    const paragraphG = document.createElement('p');

    paragraphVetor.textContent = `Vetor de idades: ${vetorIdades.join(', ')}`;
    paragraphA.textContent = `Média das idades: ${resultadoA}`;
    paragraphB.textContent = `Maior idade: ${resultadoB}`;
    paragraphC.textContent = `Idades ímpares: ${resultadoC}`;
    paragraphD.textContent = `Todos são maiores de idade? ${resultadoD}`;
    paragraphE.textContent = `Todas as idades são maiores ou iguais a ${valorInformado}? ${resultadoE}`;
    paragraphF.textContent = `Idades maiores ou iguais a ${valorInformado}: ${resultadoF.join(', ')}`;
    paragraphG.textContent = `Média das idades maiores ou iguais a ${valorInformado}: ${resultadoG}`;

    body.appendChild(paragraphVetor);
    body.appendChild(paragraphA);
    body.appendChild(paragraphB);
    body.appendChild(paragraphC);
    body.appendChild(paragraphD);
    body.appendChild(paragraphE);
    body.appendChild(paragraphF);
    body.appendChild(paragraphG);
}

window.addEventListener("load", exibirResultados);
