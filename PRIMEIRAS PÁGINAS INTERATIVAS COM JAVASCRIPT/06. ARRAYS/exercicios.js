//1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 5;
for (let i = 1; i <= 10; i++){
    console.log(i * numero);}

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [1, 3, 6, 23, 60, 73, 100];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0){
       console.log(numero);
    } 
   
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const letras = ['Victor','Joao', 'Vitoria', 'Luiz'];
for (let i = 0; i < letras.length; i++) {

}
console.log(letras)
//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

for (let i = 10; i <= 50; i++) {
    if(i % 2 ===0){
        console.log(i);
    }
    
}

/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

   const lista = [2, 7, 3, 8, 10, 4];
        for (let i = 0; i < lista.length; i++){
            const media = lista[i];
            if(media < 5){
            console.log(media)
            }
        }
       

/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

   const listaNotas = [2, 7, 3, 8, 10, 4];
   const maior = Math.max(...listaNotas);
   console.log(maior)