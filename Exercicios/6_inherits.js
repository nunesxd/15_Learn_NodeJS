// O módulo 'utils' nos permite, além de outros, que uma função criada por nós, possa adquirir funções e métodos de classes já criadas.

let util = require('util');

function Person() {
    this.name = "Rafael";
    this.lastname = "Nunes";
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name} ${this.lastname} !`);
}

function Policeman() {
    // Esta linha é a inicialização da classe pai, ou o "super construtor", sem este, o officer abaixo não teria inicializado o name a lastname:
    // OBS: Lembrando que o método call é padrão de qualquer objeto, e este apenas executa-o, neste caso, inicializa a classe Person quando este é criado.
    Person.call(this);
    this.badge = "1234";
}

// Abaixo, fazemos com que a classe 'Policeman' obtenha os métodos e atributos da classe 'Person', mas ele apenas conecta um ao outro, não os executa e nem incializa, para mais detalhes ver abaixo:
util.inherits(Policeman, Person);
// Criamos um novo Policeman, logo, este terá o método do prototype 'greet'.
let officer = new Policeman();

// Se executarmos esta linha sem o super construtor, o officer não terá o name e lastname, pois mesmo o Policeman tendo adquirido os métodos e atributos de Person, este não foi iniciado ainda, não teve um "new", logo estas propriedades não foram inicializadas. Com o super construtor tudo ocorre corretamente. 
officer.greet();