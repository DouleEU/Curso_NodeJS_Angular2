// Configuración de EXPRESS
'use strict'

var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Permite usar los métodos en nuestros clientes rest
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

app.use('/api', api);

                  
module.exports = app;