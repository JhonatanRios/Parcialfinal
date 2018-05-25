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

app.get('/', (req, res) => {
    res.render('inicio', {
        tittle: "Parcial Final",
        nombre: "Inicio"
    });
})

app.get('/proyec', (req, res) => {
    res.render('proyecto', {
        tittle: "Parcial Final",
        nombre: "Proyectos"
    });
})

app.get('/contac', (req, res) => {
    res.render('contacto', {
        tittle: "Parcial Final",
        nombre: "Contacto"
    });
})