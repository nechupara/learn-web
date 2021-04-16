'use strict'

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>ssdfsdfsdf</h1>');
}) 

app.get('/about', (req, res) => {
    res.send('this is me, serhii Dudko. And I\'m piece of shit');
})
app.listen(3000);