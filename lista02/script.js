document.addEventListener('DOMContentLoaded', function () {
    const ages = [25, 30, 18, 20, 22, 40, 50];

    // a) Soma das idades
    const sum = ages.reduce((acc, curr) => acc + curr, 0);
    displayResult(`A soma das idades é ${sum}.`);

    // b) Média aritmética simples das idades
    const average = sum / ages.length;
    displayResult(`A média aritmética simples das idades é ${average.toFixed(2)}.`);

    // c) Maior idade
    const maxAge = Math.max(...ages);
    displayResult(`A maior idade é ${maxAge}.`);

    // d) Idades ímpares
    const oddAges = ages.filter(age => age % 2 !== 0);
    displayResult(`As idades ímpares são ${oddAges.join(', ')}.`);

    // e) Verificar se todos são maiores de idade
    const allAdults = ages.every(age => age >= 18);
    displayResult(`Todos são maiores de idade? ${allAdults}.`);

    // f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    const userValue = parseInt(prompt('Informe um valor para verificar se todas as idades são maiores ou iguais a ele:'));
    const allGreaterOrEqual = ages.every(age => age >= userValue);
    displayResult(`Todas as idades são maiores ou iguais a ${userValue}? ${allGreaterOrEqual}.`);

    // g) Exibir todas as idades maiores ou iguais a determinada idade
    const specifiedAge = 30;
    const greaterOrEqualAges = ages.filter(age => age >= specifiedAge);
    displayResult(`As idades maiores ou iguais a ${specifiedAge} são ${greaterOrEqualAges.join(', ')}.`);

    // h) Média das idades das pessoas com idades maiores ou iguais a determinada idade
    const averageSpecifiedAge = greaterOrEqualAges.reduce((acc, curr) => acc + curr, 0) / greaterOrEqualAges.length;
    displayResult(`A média das idades das pessoas com idades maiores ou iguais a ${specifiedAge} é ${averageSpecifiedAge.toFixed(2)}.`);

    function displayResult(message) {
        const output = document.getElementById('output');
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        output.appendChild(paragraph);
    }
});
