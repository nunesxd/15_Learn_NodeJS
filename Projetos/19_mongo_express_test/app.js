let express = require('express');
let htmlControllers = require('./controllers/htmlControllers');
let mongoose = require('mongoose');
let app = express();

module.exports = function() {
    // Construtor do Schema, que representa o banco de dados praticamente, já que não temos tabelas como no SQL tradicional.
    let Schema = mongoose.Schema;

    let personSchema = new mongoose.Schema({
        firstname: String,
        lastname: String,
        address: String
    });

    // Abaixo definimos um function constructor, que nos permite gerar objetos, no caso, uma função de nome 'Person', de schema 'personSchema'.
    let Person = mongoose.model('Person', personSchema);

    // Geramos o objeto chamado John, seguindo o schema informado acima.
    let john = Person({
        firstname: 'John',
        lastname: 'Doe',
        address: '555 Main St.'
    });

    // Salvamos então o objeto John no banco de dados.
    john.save(function(err) {
        if(err) throw err;
        console.log('Person saved !');
    });

    let port = process.env.port || 3000;

    app.use('/public', express.static(__dirname + '/public'));

    app.set('view engine', 'ejs');

    app.use('/', function(req, res, next) {
        console.log('Request URL: ' + req.url);

        // Procuramos todos os usuários identificados na base. O '{}' significa que queremos todas as informações identificadas, poderíamos especificar só pelo primeiro nome, ou etc.:
        Person.find({}, function(err, users) {
            if(err) throw err;

            // Retorna um objeto contendo todos os usuários identificados:
            console.log(users);
        });

        next();
    });

    // Por fim, chamamos nossos metodos HTTP referentes ao HTML:
    htmlControllers(app);

    app.listen(port);
}