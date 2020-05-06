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

// app.get( '/projectData', (req, res) => {
//     console.log(projectData);
//     res.send(projectData);
// });

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`);
});


// app.get('/all', function (req, res) {
//     res.send(projectData);
//     // console.log('hello world')
// })



