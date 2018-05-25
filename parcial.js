const express = require('express'),
    engines = require('consolidate');
fs = require('fs');

var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Iniciar servidor
app.listen(5000);
console.log("Escuchando servidor")

app.get('/', (req, res) => {

    var inicio = inicio + 1;

    fs.writeFile('./visitas.txt', '{\n"inicio": ' + inicio + ';\n"proyecto": 0;\n"contacto": 0;\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
    });
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