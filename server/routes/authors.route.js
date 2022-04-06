const AuthorsController = require('../controllers/authors.controller');

module.exports = function(app){
    app.get('/', AuthorsController.index);
    // POST: CREATE AUTHOR
    app.post('/create', AuthorsController.createAuthor);

    // GET ALL AUTHORS
    app.get('/authors', AuthorsController.findAllAuthors);
}