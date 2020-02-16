const express = require('express');
const routes = express.Router();

// Importamos los controladores
const mainController = require('../controllers/mainController');
const productosController = require('../controllers/productosController');

routes.get('/', mainController.home);

routes.get('/productos', productosController.home);
routes.get('/productos/lista', productosController.traerTodos);

module.exports = routes;