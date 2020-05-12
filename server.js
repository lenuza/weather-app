//endpoint for all routes
const projectData = [];

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/* Initializing the main project folder */
app.use(express.static('app'));

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`);
});

app.get('/getWeatherData', (req, res) => {
    res.send(projectData);
    console.log('data sent')
});

app.post('/weatherData', (req, res) => {
    newEntry = {
        weather: req.body.weather,
        feelings: req.body.feelings,
    }

    projectData.push(newEntry);
    console.log(projectData);
});