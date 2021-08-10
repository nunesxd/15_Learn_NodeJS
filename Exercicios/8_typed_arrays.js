// Anteriormente o JS não era o mais recomendado para lidar com buffers e streams, para isso o Node era encarregado, como vimos nos exemplos anteriores. O ES6 adicionou algumas alternativas para lidar com isso, como:

// Abaixo definimos que o número de bits que queremos neste buffer é 8.
let buffer = new ArrayBuffer(8);
// Abaixo criamos uma view, uma forma de observar o buffer criado acima:
let view = new Int32Array(buffer);

// No caso não podemos adicionar mais que dois números, os outros não serão acrescidos, mas nenhum erro será retornado.
view[0] = 1;
view[1] = 5;
view[2] = 8;
view[3] = 10;

console.log(view);