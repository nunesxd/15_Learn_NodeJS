// O módulo fs, ou filesave, nos permite abrir e manipular arquivos.
let fs = require('fs');

// Existe uma opção de leitura do arquivo de forma síncrona (como o JS opera), ou seja, o código apenas continua quanto esta requisição for completa,e não antes.
// OBS: A variável "__dirname" é criada na execução do código, nela temos o diretório onde consta o arquivo.
let greetSync = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greetSync);

// Assim como existe a opção de execução assíncrona, ou seja, ela é executada de forma independente do código, e aparece quando esta estiver completa.
// OBS: Outro detalhe importante é a função callback que utilizamos, esta função é executada quando a operação de leitura estiver concluída. O padrão que usamos nesta função é a de "error first", ou seja, a primeira variável que recebemos nesta função é a de erro, que retorna nula caso este não ocorra no código.
let greetAsync = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

// Como o Node é assíncrono, podemos usar o método acima para ser executado de forma independente, desta forma, o código abaixo será executado antes do callback acima:
console.log('Done !');