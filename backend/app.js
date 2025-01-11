const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,"config/config.env")});


app.use(express.json());


const genai = require('./routes/geminiroute')

app.use('/api/v1/',genai);

module.exports = app;
