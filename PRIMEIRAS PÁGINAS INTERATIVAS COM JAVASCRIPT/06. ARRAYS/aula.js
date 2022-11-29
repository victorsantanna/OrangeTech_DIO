//exemplo1

const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos);

//exemplo2
const alunos1 = ['Maria', 'Renan', 'Luiz'];
console.log(alunos1[0]);
console.log(alunos1[1]);
console.log(alunos1[2]);

//exemplo3
const alunos3 = ['João', 'Vitor', 'Marina'];

alunos3.push('Renan');

alunos3[4] = 'mateus';
console.log(alunos3[3]);

//exemplo4
const alunos4 = ['João', 'Vitor', 'Marina'];

console.log(alunos4);
console.log(alunos4.pop());
console.log(alunos4);

//exemplo5

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1]+ notas[2] + notas[3] + notas[4];

console.log(soma / notas.length);


//exemplo6


for (let i = 0; i < 10; i++) {
    console.log(i);  
} 


//exemplo7

const nome = 'Victor Santana';
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);   
}

