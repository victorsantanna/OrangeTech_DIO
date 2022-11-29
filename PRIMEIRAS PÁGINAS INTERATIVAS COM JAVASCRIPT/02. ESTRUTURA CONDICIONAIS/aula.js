//variável Boolean

const camisetaVictorAzul = true;
const camisetaVictorPreta = false;

//condicional

//exemplo

const numero = 10;

const numeroPar =  numero % 2 === 0;
console.log(numeroPar); //true

//exemplo 2
const numero1 = 11;

const numeroPar1 =  numero1 % 2 === 0;
console.log(numeroPar1);//false


//exemplo 3
const numero2 = 3;

const numeroPar2 =  (numero2 % 2) === 0;

if (numeroPar2){
    console.log('Número Par')
} else {
    console.log('Número Impar')
}

//exemplo 4
const numero3 = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;
if (numero === 0){
    console.log('O número é inválido');
} else if (numeroDivisivelPor5){
    console.log('sim');
} else {
    console.log('Não')
}

/*  Dica
 = é atribuição
 == é igualdade, porém ele ignora o tipo
 === é igualdade compara os tipos
*/