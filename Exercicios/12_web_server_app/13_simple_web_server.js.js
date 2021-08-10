let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {

    // Agora estamos enviando nossa página HTML para o browser:
    res.writeHead(200, {'Content-Type': 'text/html'});
    let htmlDoc = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // Abaixo definimos a mensagem que será colocada no placeholder que está em nosso HTML:
    let message = 'New Hello World !';
    htmlDoc = htmlDoc.replace('{Message}', message);
    res.end(htmlDoc);

}).listen(1337, '127.0.0.1');