// installed nodemon, express, express-handlebars
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HAAAAAAAY');
});






app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});