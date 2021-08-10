// Abaixo iremos utilizar o conceito de pipe do Node, que nada mais é que a conexão entre streams (como se fosse um encanamento de agua).

let fs = require('fs');

// Vamos utilizar a bibioteca 'zlib' do Node para comprimir o nosso arquivo texto.
let zlib = require('zlib');

let readableStrm = fs.createReadStream(__dirname + '/lorem.txt');

let writableStrm = fs.createWriteStream(__dirname + '/lorem_copy.txt');

let compressed = fs.createWriteStream(__dirname + '/lorem.txt.gz');

let gzip = zlib.createGzip();

// Podemos fazer este mesmo processo através do método pipe do stream writable.

// readableStrm.on('data', function(chunk) {
//     console.log(chunk.length);
//     writableStrm.write(chunk);
// });

// Realiza o mesmo processo de cópia dos dados do arquivo read.
readableStrm.pipe(writableStrm);

// Abaixo comprimimos os dados através da biblioteca e depois transferimos os dados ao arquivo comprimido final.
// Este é o processo que o Node quer que usemos, realizar o processo por meio de pipes dos streams.
// Cabe mencionar que isso só é possível pois tanto o readable quanto o gzip permitem que peguemos suas informações dos streams, um stream writable não poderia ser piped para um outro processo.
readableStrm.pipe(gzip).pipe(compressed);