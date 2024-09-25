const alunos = [
    { nome: 'Gustavo', nota: 7 },
    { nome: 'Larissa', nota: 5 },
    { nome: 'José', nota: 8 },
    { nome: 'Paula', nota: 6 },
    { nome: 'Pedro', nota: 4 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}


const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);

