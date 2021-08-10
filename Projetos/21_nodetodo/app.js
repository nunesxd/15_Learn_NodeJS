let express = require('express');
let con = require('./config/index');
let mongoose = require('mongoose');
let setupController = require('./controllers/setupController');
let apiController = require('./controllers/apiController');
let app = express();

let port = process.env.port || 3000;

app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

mongoose 
    .connect(con.getDbConnectionString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
    .then(() => {
        console.log("Database connected!");
        // Apenas para inicialização de nossa base de dados, caso essa esteja vazia:
        setupController(app);
        // Nossa API, que controla nossos endpoints:
        apiController(app);
    })
    .catch(err => console.log(err));

app.listen(port);