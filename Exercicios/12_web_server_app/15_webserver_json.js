let http = require('http');

http.createServer(function(req, res) {

    // Agora vamos retornar um JSON para uso:
    res.writeHead(200, {'Content-Type': 'application/json'});
    let obj = {
        firstName: "Rafael",
        lastName: "Nunes"
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');