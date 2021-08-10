let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {

    // Agora estamos enviando nossa página HTML para o browser:
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Ao invés de usarmos um processo síncrono e de leitura de arquivos, podemos usar o conceito de Stream, e aumentar ainda mais a nossa performance.
    // Com Stream, não precisamos usar o end() por exemplo, podemos enviar o body pelo pipe mesmo.
    let htmlDoc = fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

}).listen(1337, '127.0.0.1');