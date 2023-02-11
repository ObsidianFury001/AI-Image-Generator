const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const path = require('path'); 
const port = process.env.PORT || 5000;

const app = express();
// Body parser for requests 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/aiRoutes'));
app.listen(port, () => { console.log(`Server started on: http://localhost:${port}`)});