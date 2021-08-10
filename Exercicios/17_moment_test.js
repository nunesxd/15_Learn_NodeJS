// Como baixamos o moment pelo NPM, ele irá baixar os arquivos dentro da pasta 'node_modules', o require então, sempre irá procurar os módulos a partir dessa pasta, caso ela não exista, ele usa os módulos particulares ao Node.
// OBS: Também é possível baixarmos o moment para as pastas particulares ao node, basta adicionarmos '--save' no comando de instalação no NPM.
let moment = require('moment');

console.log(moment().format());