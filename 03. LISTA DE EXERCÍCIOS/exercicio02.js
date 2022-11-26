/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const peso = 115;
const altura = 1.80;
const imc = peso / (altura * altura);

if(imc < 18.5){
    console.log('Abaixo do Peso ' + imc.toFixed(2));
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso Normal '+ imc.toFixed(2));
} else if (imc >= 25 && imc < 30){
    console.log('Acima do Peso ' + imc.toFixed(2));
} else if(imc >= 30 && imc < 40){
    console.log('Obeso '+ imc.toFixed(2));
} else {
    console.log('Obesidade Grave '+ imc.toFixed(2));
}