'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoritosSchema = Schema({
    title: String,
    description: String,
    url: String
});

module.exports = mongoose.model('Favorito', FavoritosSchema);