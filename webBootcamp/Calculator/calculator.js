'use strict'

const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post('/', (req, res) => {
    // console.log(req.body);
    // res.send('Thank for posting that');
    // res.sendFile(__dirname + "/index.html");
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send('Result of the calculation is ' + result);
    })
app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    console.log(__dirname);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmiIndex = weight / (height**2);
    res.send('Your BMI is equal ' + bmiIndex + '<p></p><a href="/bmicalculator">link</a></p>');
})
