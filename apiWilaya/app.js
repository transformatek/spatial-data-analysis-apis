const express = require('express');
const wilayaController = require("./controllers/wilayaController")
const app = express();


app.get('/api/v1/getWilaya', wilayaController.getWilaya);

module.exports = app;