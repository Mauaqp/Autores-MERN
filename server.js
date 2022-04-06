const express = require('express');
const app = express();


require('./server/routes/authors.route')(app); // test
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});