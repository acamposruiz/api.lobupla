//server.js

var express = require('express');
var app = require();
var mongoose = require('mongoose');

// Coneccion con la base de datos
mongoose.connect('mongodb://localhost:27017/angular-todo');

// Configuración 
app.configure(function(){
	// Localización de los ficheros estáticos
	app.use(express.static(__dirname + '/public'));
	// Muestra un log de todos los requiests a la consola
	app.use(express.logger('dev'));
	// Permite cambiar el HTML con el método POST
	app.use(express.bodyParser());
	// Simula DELETE Y PUT
	app.use(express.methodOverride());
});

// Definicion de los modelos
var Todo = mongoose.model('Todo', {
	text: String
});

// Escucha en el puerto 8080 y corre el servidor
app.listen(8080, function(){
	console.log('App listening on port 8080')
});