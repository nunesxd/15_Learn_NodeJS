// Apenas lembrando que o protótipo é tipo uma superclasse, um padrão, de qualquer objeto que seja criado:
var Pessoa = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Abaixo adicionamos um método ao protótipo do objeto "Pessoa"
Pessoa.prototype.saudacao = function() {
    console.log(`Olá ${this.nome} ${this.sobrenome} !`);
}

var rafael = new Pessoa('Rafael', 'Nunes');
var jessica = new Pessoa('Jessica', 'Avelino');

rafael.saudacao();
jessica.saudacao();

// A propriedade '__proto__' nos mostra os métodos e atributos particulares do protótipo do objeto, tmb podemos verificar quanto a igualdade do prototipo entre as diferentes instâncias de um mesmo objeto.
console.log(rafael.__proto__ === jessica.__proto__);