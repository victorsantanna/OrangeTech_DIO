/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
// exemplos sem condicional
let valorProduto = 100.00;

let debitoDesconto =  valorProduto * 0.1;
    valorProduto = valorProduto - debitoDesconto;
    console.log('Valor no Débito R$; ' + valorProduto);

let valorProduto1 = 100.00;

let avistaPix =  valorProduto1 * 0.15;
    valorProduto1 = valorProduto1 - avistaPix;
    console.log('Valor à vista ou no Pix R$; ' + valorProduto1);

let valorProduto2 = 100.00;

let duasVezes =  valorProduto2;
    
    console.log('Valor em duas vezes R$; ' + valorProduto2);


let valorProduto3 = 100.00;

let acimaDuasVezes =  valorProduto3 * 0.1;
valorProduto3 = valorProduto3 + acimaDuasVezes;
console.log('Valor à vista ou no Pix R$; ' + valorProduto3);

//resolução com condicional

/*
    Código Condição de pagamento:
   1 - À vista Débito, recebe 10% de desconto;
   2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
   3 - Em duas vezes, preço normal de etiqueta sem juros;
   4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaPagamento = 4;
if(formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if(formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if(formaPagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta +(precoEtiqueta * 0.1));
}