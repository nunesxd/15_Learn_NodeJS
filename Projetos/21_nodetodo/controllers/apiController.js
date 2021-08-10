let Todos = require('../models/todoModel');
let express = require('express');

module.exports = function(app) {

    // Middleware para identificar as informações na URL:
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Pesquisa todos os todos por usuário na base e os retorna para a tela:
    app.get('/api/todos/:uname', function(req, res) {
        Todos.find({username: req.params.uname}, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    // Pesquisa todos os todos por ID na base e os retorna para a tela:
    app.get('/api/todo/:id', function(req, res) {
        Todos.findById({_id: req.params.id}, function(err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });

    // Adiciona um todo a lista:
    app.post('/api/todo', function(req, res) {
        if(req.body.id) {
            // Verifica se o ID informado já existe, caso sim, atualiza os dados no Mongo:
            Todos.findByIdAndUpdate(req.body.id
                , {
                    todo: req.body.todo, 
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                }
                , function(err, result) {
                    if(err) throw err;
                    res.send('Todo updated successfully !');
                });
        }
        // Caso seja novo, adiciona ao BD: 
        else {
            let newTodo = Todos({
                username: "Test",
                todo: req.body.todo, 
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err) {
                if(err) throw err;
                res.send('Todo added successfully !');
            });
        }
    });

    // Deleta um todo de nossa lista no mongo:
    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if(err) throw err;
            res.send('Todo removed successfully !');
        });
    });
}