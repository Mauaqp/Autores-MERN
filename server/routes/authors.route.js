const AuthorsController = require('../controllers/authors.controller');
module.exports = function(app){
    app.get('/', AuthorsController.index);
}