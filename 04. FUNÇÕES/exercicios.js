// função para escrever o nome
function escrevaMeuNome(nome){
    console.log('Meu nome é '+ nome + '.');
}
escrevaMeuNome('Victor');

// função que veja se você é maior de idade

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
}
verificarIdade(31);


/*
Função do preço das etiquetas
  Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta,10));
} else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta,15));
} else if(formaPagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}


//





//node exercicios.js