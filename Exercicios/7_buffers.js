// Buffers são espaços temporários e limitados na memória, que guardam uma determinada informação para posterior processamento.

// A biblioteca do buffer é nativo ao Node, e pode ser inicializado diretamente. Para ser inicializado, precisamos passar exatamente qual o tamanho particular ao buffer, ou o que este buffer armazenaria exatamente, assim como o tipo de encoding (padrão é 'UTF-8').
let buffer = new Buffer("Hello", "utf8");

// O buffer é representado como um array contendo o código binário de cada letra, com esse array podemos fazer diversas coisas:
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);

// Como o buffer possui um tamanho limitado, quando escrevemos nele, na realidade estamos o reescrevendo, ou seja, ao invés de 'Hello' nós temos 'wollo' agora.
buffer.write('wo');
console.log(buffer.toString());

// Até o presente momento a criação de um buffer diretamente está depreciado, atualmente é recomendado o uso de outros métodos estáticos da classe, como o 'Buffer.alloc()' abaixo.
let teste = Buffer.alloc(6, "Hello2");
console.log(teste.toString());