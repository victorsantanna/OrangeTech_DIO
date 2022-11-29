/*  Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
marca;
cor;
gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }

}

const uno = new Carro('fiat', 'prata', 1/12);
console.log(uno);
uno.calcularGastoDePercurso(70,5);
console.log(uno.calcularGastoDePercurso(70,5));
const cruze = new Carro('Chevrolet', 'preto', 1/10);
console.log(cruze);
console.log(cruze.calcularGastoDePercurso(70,5));
