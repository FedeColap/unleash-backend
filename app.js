const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const notes =require('./dummy-data.js')

const app = express();
app.use(morgan('dev'));
app.use(cors());


app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
    `;
    res.send(responseText);
});
app.get('/notes', (req, res) => {
    res
        .json(notes);
})










app.get('/', (req, res) => {
    res.send('Fede, Speranza e Carita');
});

app.listen(8000, () => {
    console.log('Express server is listening on http://localhost:8000/');
});