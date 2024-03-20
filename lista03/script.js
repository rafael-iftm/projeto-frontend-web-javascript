document.addEventListener("DOMContentLoaded", function() {
    const optionsSelect = document.getElementById('options');
    const studentsContainer = document.getElementById('students-container');

    optionsSelect.addEventListener('change', function() {
        const selectedOption = optionsSelect.value;
        if (selectedOption !== 'selecione') {
            fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
                .then(response => response.json())
                .then(data => {
                    let filteredStudents = [];

                    switch(selectedOption) {
                        case 'todos':
                            filteredStudents = data;
                            break;
                        case 'homens':
                            filteredStudents = data.filter(student => student.sexo === 'M');
                            break;
                        case 'mulheres':
                            filteredStudents = data.filter(student => student.sexo === 'F');
                            break;
                        case 'aprovados':
                            filteredStudents = data.filter(student => (student.notaBim1 + student.notaBim2) >= 60);
                            break;
                        case 'reprovados':
                            filteredStudents = data.filter(student => (student.notaBim1 + student.notaBim2) < 60);
                            break;
                        case 'todos_aprovados':
                            const todosAprovados = data.every(student => (student.notaBim1 + student.notaBim2) >= 60);
                            if (todosAprovados) {
                                studentsContainer.innerHTML = `<p>Todos os alunos foram aprovados!</p>`;
                            } else {
                                studentsContainer.innerHTML = `<p>Nem todos os alunos foram aprovados!</p>`;
                            }
                            return;
                        case 'media_turma':
                            const totalNotes = data.map(student => student.notaBim1 + student.notaBim2);
                            const mediaTurma = totalNotes.reduce((acc, curr) => acc + curr, 0) / totalNotes.length;
                            studentsContainer.innerHTML = `<p>A média da turma é: ${mediaTurma.toFixed(2)}</p>`;
                            return;
                        default:
                            filteredStudents = [];
                    }

                    // Renderiza os estudantes filtrados
                    renderStudents(filteredStudents);
                })
                .catch(error => console.error('Erro ao obter dados dos estudantes:', error));
        } else {
            studentsContainer.innerHTML = ''; // Limpa o conteúdo do container
        }
    });

    function renderStudents(students) {
        const studentsHTML = students.map(student => `<p>${student.nome} - Nota Bim 1: ${student.notaBim1}, Nota Bim 2: ${student.notaBim2}</p>`).join('');
        studentsContainer.innerHTML = studentsHTML;
    }
});
