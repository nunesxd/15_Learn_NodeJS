let http = require('http');

// Quando criamos um servidor o node nos envia essa função callback com duas variáveis, uma representando a requisição (request), e outra representando a resposta (response):
http.createServer(function(req, res) {
    // Podemos informar o tipo de dado que estamos enviando ao web server, no caso, um texto simples:
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Como final, ou o body da mensagem, podemos enviar o texto simples que informamos, como uma quebra de linha no fim do texto:
    res.end("Hello World\n");

    // O listen se refere a porta que queremos enviar. A porta nada mais é que o identificador da aplicação.
}).listen(1337, '127.0.0.1');

// Se executarmos o código no Node, ele irá ficar esperando alguém enviar um request para a porta que especificamos, para isso, podemos usar o browser e fazer a requisição por ele, basta apenas digitarmos: "localhost:1337" e tudo pronto ! Temos nosso text/plain!