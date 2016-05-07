var ruta=require('express').Router();
module.exports=(function(modelo){
	var usuario=require('../controller/ControladorUsuario.js')(modelo);
	var hotel=require('../controller/ControladorHotel.js')(modelo);
	ruta.get('/' ,function(peticion,respuesta){
		
	});
	/*
	Ruta para Usuario
	*/
	ruta.post('/usuario/registro', usuario.registro);
	ruta.post('/usuario/login', usuario.login);
	ruta.get('/prueba', usuario.prueba)
	/*Ruta Hotel*/
	ruta.get('/hotel/:id',hotel.list);
	ruta.post('/hotel',hotel.add);
	ruta.put('/hotel/:id',hotel.edit);
	ruta.delete('/hotel/:id',hotel.delete);
	return ruta;
});