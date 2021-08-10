let mongoose = require('mongoose');
let api = require('./app');

let uri = ("mongodb+srv://test:Test@cluster0.inoy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

mongoose 
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => {
        console.log("Database connected!");
        api();
    })
 .catch(err => console.log(err));