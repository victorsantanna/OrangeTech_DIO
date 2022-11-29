//exemplo de objetos

const victor = {
    nome: 'Victor Santana',
    idade: 31,
    descrever: function(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

victor.descrever();

// exemplo 2

const atributos = 'idade';
console.log(victor[atributos]);

// Classes

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    
    descrever(){
       console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos nasci em ${this.anoDeNascimento}`)
    }

}

const vitor = new Pessoa('vitor', 25);
const renan = new Pessoa('renan', 30);

console.log(vitor);
console.log(renan);



vitor.descrever();
renan.descrever();


//exemplo 3

class person{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        
    }
}

function compararPerson(p1, p2){
    if( p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const rafael = new person('rafael', 45);
const felipe = new person('felipe', 70);

compararPerson(rafael, felipe);








