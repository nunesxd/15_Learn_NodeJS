let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

let Todos = mongoose.model('todos', todoSchema);

module.exports = Todos;