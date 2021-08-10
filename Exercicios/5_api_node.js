// Existem algumas bibliotecas que não são disponibilizadas naturalmente pelo NodeJs, mas que podem ser utilizadas. Neste caso, podemos usar o require para pega-las:
var util = require('util');

// Exemplo de uso da nova biblioteca:
var name = "Rafael";
var greeting = util.format("Nome: %s", name);
util.log(greeting);