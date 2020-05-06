const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Initializing the main project folder */
app.use(express.static('app'));

// API endpoint
const projectData = {};

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`);
});

const apiKey = 'bbcbc22c4ee1c4bd5eecd122afbb2825';

// app.get('/all', function (req, res) {
//     res.send(projectData);
//     // console.log('hello world')
// })

app.get('/', function (req, res) { res.send('welcome!'); });




