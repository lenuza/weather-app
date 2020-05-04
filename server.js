const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Initializing the main project folder */
app.use(express.static('weather-app'));

// API endpoint
projectData = {};

// set port

const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log(`Hello ${port}`)
}





