const entrada = [4, 3, 50, 10, 918,23, 1500];
let i = 0;

function gets(){
    const valor = entrada[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };





