const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        require: [true, "Se necesita un nombre para el autor"],
        minlength: [3, "El nombre del autor debe tener al menos 3 caracteres"]
    }
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);