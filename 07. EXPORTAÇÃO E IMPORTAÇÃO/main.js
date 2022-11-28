/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

dado de entrada: 5, 50, 10, 98,23
saída: 98
*/

const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++){
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
} 

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteados = numerosSorteados[i];
    if ( numeroSorteados > maiorValor){
        maiorValor = numeroSorteados;
    }
}


let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++){
    const numeroSorteados = gets();
    if(numeroSorteados > maiorValorEncontrado){
    maiorValorEncontrado = numeroSorteados;
    }
}

print(maiorValorEncontrado);

const quantidadeDeAlunos = gets();
let maiorValorEncontrado1 = 0;

for (let i = 0; i < quantidadeDeAlunos; i++){
    const numeroSorteados = gets();
    if(numeroSorteados > maiorValorEncontrado1){
    maiorValorEncontrado1 = numeroSorteados;
    }
}

print(maiorValorEncontrado1);