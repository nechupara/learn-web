'use strict'

const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

    // console.log(status);
    // res.send('httpsFunc');
})


// const query = 'London';
// const apiKey = 'e9a79f6e76cb97403004d5db6709ea26';
// const unit = 'metric'
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

// https.get(url, (response) => {
//     console.log(response.statusCode);
//     response.on('data', (d) => {
//         const weatherData = JSON.parse(d);
//         const temperature = weatherData.main.temp;
//         const weatherDescription = weatherData.weather[0].description;
//         const icon = weatherData.weather[0].icon;
//         const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
        
//         console.log(temperature, weatherDescription);

//         res.write('<head><meta charset="utf-8"></head>');
//         res.write('<h2>The weather is currently ' + weatherDescription + '</h2>');
//         res.write(`<h1>The temperature in ${query} is ${temperature} Celsius degrees.</h1>`);
//         res.write(`<img src='${imageURL}' alt='image of weather condition'>`)
//         res.send();
//     })
// })



app.listen('3000', () => {
    console.log('server started');
})
