let express = require('express');
let app = express();

let port = process.env.port || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res) {
       res.render('index');
});

app.listen(port);