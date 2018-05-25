const express = require('express'),
    engines = require('consolidate');

var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Iniciar servidor
app.listen(5000);
console.log("Escuchando servidor")