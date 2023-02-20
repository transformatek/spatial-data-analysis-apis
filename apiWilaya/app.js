const express = require('express');
var bodyParser = require('body-parser')
const wilayaController = require("./controllers/wilayaController")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/v1/getWilaya', wilayaController.getWilaya);

module.exports = app;