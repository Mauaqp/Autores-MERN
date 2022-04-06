const {Author} = require('../models/Author.model');
const {response} = require ("express");


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// CREACIÓN DE NUEVO AUTOR
module.exports.createAuthor = (request, response) => {
    const {name} = request.body;
    console.log("Controlador - createAuthor");

    Author.create({name})
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
}

// ENCONTRAR TODOS LOS AUTORES PARA LA LISTA
module.exports.findAllAuthors = (request, response) => {
    console.log("Controlador - findAllAuthors");

    Author.find()
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}