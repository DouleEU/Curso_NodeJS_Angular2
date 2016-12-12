
'use strict'

var mongoose = require('mongoose');


var app = require('./app.js'); // Contiene la configuracion de Express
var port = process.env.PORT || 3500;

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('Conexión con base de datos correcta');
        // function()      
        app.listen(port, () => {
            console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
        });
    }
});
                 



