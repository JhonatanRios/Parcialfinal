const express = require('express'),
    engines = require('consolidate'),
    fs = require('fs');

var inicio = 0;
var proyecto = 0;
var contact = 0;

var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Iniciar servidor
app.listen(5000);
console.log("Escuchando servidor")

app.get('/', (req, res) => {
    var inicio =+ 1;
    var proyecto = proyecto;
    var contact = contact;

    fs.writeFile('./visitas.txt', '{\n"inicio": ' + inicio + ';\n"proyecto": ' + proyecto + ';\n"contacto": ' + contact + ';\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
        console.log(inicio);
    });

    res.render('inicio', {
        tittle: "Parcial Final",
        nombre: "Inicio"
    });
})

app.get('/proyec', (req, res) => {
    var inicio = inicio;
    var proyecto =+ 1;
    var contact = contact;

    fs.writeFile('./visitas.txt', '{\n"inicio": ' + inicio + ';\n"proyecto": ' + proyecto + ';\n"contacto": ' + contact + ';\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
        console.log(inicio);
    });

    res.render('proyecto', {
        tittle: "Parcial Final",
        nombre: "Proyectos"
    });
})

app.get('/contac', (req, res) => {
    var inicio = inicio;
    var proyecto = proyecto;
    var contact =+1;

    fs.writeFile('./visitas.txt', '{\n"inicio": ' + inicio + ';\n"proyecto": ' + proyecto + ';\n"contacto": ' + contact + ';\n}', error => {
        if (error)
            console.log(error);
        else
            console.log('El archivo fue creado');
        console.log(inicio);
    });

    res.render('contacto', {
        tittle: "Parcial Final",
        nombre: "Contacto"
    });
})

fs.readFile('visitas.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });