// Express é uma biblioteca que facilita a criação de web servers HTTP:
let express = require('express');
// A biblioteca body-parser é um middleware, que nos permite manipular a URL providenciada:
let bodyparser = require('body-parser');
let app = express();

// Podemos usar o Express para obter informações diretamente do corpo da URL:
let urlencodedParser = express.urlencoded();
let jsonParser = express.json();

// Abaixo estamos setando uma porta, onde o padrão é 3000 (porta padrão do Express), mas que ela pegará a porta do ambiente, se este existir:
let port = process.env.port || 3000;

// Abaixo estamos disponibilizando o nosso aquivo css. O app.use nos roteia para o que pode ser considerado um middleware, no caso, um documento css estatico que foi disponibilizado:
app.use('/public', express.static(__dirname + '/public'));

// Abaixo configuramos um template engine, onde podemos escolher o que usar, no caso, o ejs. Um template engine nos permite, dentre outros, usarmos variáveis direto no HTML.
app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    // O next() é só uma função para executar o próximo middleware que for identificado, no caso, um app.get() pode ser considerado como middleware:
    next();
});

// Abaixo estamos configurando um callback para o caso de recebermos uma solicitação pelo browser, ou seja, método GET do HTTP (ou 'get' verb, como são chamados os métodos do HTTP).
app.get('/', function(req, res) {
    /* Abaixo estamos enviando um simples código HTML ao browser, note que não precisamos definir o tipo de resposta.
    No código abaixo também criamos um link para o nosso arquivo css, notando que o link entre os arquivos está sendo feito pelo express static acima.
    Acima, passamos a utilizar o padrão ejs para configurar o HTML, logo, comentamos o código abaixo.
    res.send('<html><head> <link href="/public/style.css" rel="stylesheet" /> </head><body><h1>Hello World !</h1></body></html>');*/

    /* Para utilizarmos o padrão EJS, podemos usar o render(). Por padrão ele irá procurar o documento especificado na pasta 'views', usando a extensão que foi informada no set():
    Usamos as chaves para passar os valores das respectivas variáveis para serem usadas no EJS.*/
    res.render('index', {name: "Rafael Nunes", Qstr: req.query.Qstr});
});

// Podemos escrever quantos métodos HTTP quisermos, usando a mesma url ou não. Note que estamos usando o método próprio do expressa para gerar um objeto JSON:
app.get('/json', function(req, res) {
    res.json({firstName: 'Rafael', lastName: 'Nunes'});
});

/* Abaixo iremos usar a Query String para receber dados direto da URL do método GET. (sintaxe da query string - '?Qstr=123')
Também estamos utilizando uma outra forma de coletar informações pela URL, o ':name' indica que o express irá receber qualquer valor informado na URL como parâmetro da requisição.*/
app.get('/:name', function(req, res) {
    res.render('index', {name: req.params.name, Qstr: req.query.Qstr});
});

app.post('/', urlencodedParser, function(req, res) {
    // Quando estamos enviando uma resposta a tela, no caso, quando apertamos o submit que adicionamos no form:
    res.send('Thank you !');
    // A propriedade body será disponibilizada pelo nosso parser, informado acima:
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

// Abaixo usamos um middleware para transformar os dados do POST em JSON:
app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data !');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

// Abaixo criamos um servidor na porta 3000:
app.listen(port);
