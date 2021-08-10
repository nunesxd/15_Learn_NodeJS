let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {

    // Podemos controlas as diversas formas de se enviar informações por um webserver, usando a url de request:
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    
    if(req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let obj = {
            firstName: "Rafael",
            lastName: "Nunes"
        };
        res.end(JSON.stringify(obj));
    }

}).listen(1337, '127.0.0.1');