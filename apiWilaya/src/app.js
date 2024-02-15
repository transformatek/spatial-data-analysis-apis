const express = require('express');
const wilayaController = require("./controllers/wilayaController")
const communeController = require("./controllers/communeController")
const app = express();


app.get('/api/v1/getWilaya', wilayaController.getWilaya);
app.get('/api/v1/getCommune', communeController.getCommune);

module.exports = app;