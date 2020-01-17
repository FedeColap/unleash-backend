require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notes =require('./dummy-data.js')

const app = express();
app.use(morgan('dev'));
app.use(cors());


// app.use(function validateBearerToken(req, res, next) {

//     const apiToken = process.env.API_TOKEN
//     const authToken = req.get('Authorization')
//     if (!authToken || authToken.split(' ')[1] !== apiToken) {
//         return res.status(401).json({ error: 'Unauthorized request' })
//     }
//     next()
// })

app.get('/notes', (req, res) => {
    res
        .json(notes);
})


app.get('/', (req, res) => {
    res.send('Fede, Speranza e Carita');
});


module.exports = app;