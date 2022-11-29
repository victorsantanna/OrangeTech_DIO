//como declarar uma função

//exemplo1
function teste(){
    console.log('victor')
}
teste();

//exemplo2
function sayMyName(name){
    console.log('Meu nome é ' + name)
}
sayMyName('victor')
sayMyName('rafael')

//exemplo3
function quadrado(valor){
   return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)

//exemplo4
function incrementarJuros(valor, percentualJuros){
   const valorDeAcrecimo = (percentualJuros / 100 ) * valor;
   return valor + valorDeAcrecimo;

}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

//exemplo5
function main(){
    console.log('programa principal')
}
main();

//exemplo6
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}
const peso = 75;
const altura = 1.75;
const imc = calcularImc(peso, altura);
console.log(imc.toFixed(3));

function classificarImc(imc){
    if(imc < 18.5){
        return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25){
        return 'peso normal';
    } else if(imc >= 25 && imc < 30){
        return 'acima do peso';
    } else if(imc >= 30 && imc < 40){
        return 'obeso';
    } else{
        return 'obesidade grave';
    }
}
console.log(classificarImc(imc));

//










//node aula.js