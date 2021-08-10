// É importante salientar que o Node possui diversos tipos de stream, com métodos e propriedades particulares, sendo eles: read, write, duplex (read e write), transform e passThrough.

let fs = require('fs');

// Criamos abaixo um stream readable apenas:
// A parte entre chaves do método representa as configurações do stream. O 'highWaterMark' representa o tamanho do buffer que queremos utilizar (o padrão do windows é de 64 KBytes), abaixo configuramos como 16Kb (1024 representa 1 kb).
let readableStrm = fs.createReadStream(__dirname + '/lorem.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});

let writableStrm = fs.createWriteStream(__dirname + '/lorem_copy.txt');

// Acima, criamos um objeto de stream readable e um writeable, os dois objetos herdam da classe "EventEmitter", ou seja, ambos possuem os métodos referentes a escutar eventos, como o 'on()' e o 'emit()':
// O evento 'data', ocorre sempre que o buffer fica cheio, neste caso, após esta ocorrência, realiza a cópia do buffer em um outro documento texto.
readableStrm.on('data', function(chunk) {
    // O Chunk é o pedaço de informação que está presente no buffer, no determinado momento que ocorre o evento 'data'. Como configuramos o buffer com 16kb separamos o documento em 4 'chunks', ou seja, em 4 partes.
    console.log(chunk.length);
    writableStrm.write(chunk);
});