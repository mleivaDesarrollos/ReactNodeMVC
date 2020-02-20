/* eslint-disable no-console */
const express = require('express');

const app = express();

// Cargamos la librería de uso interno
const routes = require('./routes');
const db = require('./config/db');

// Cargamos las variables de entorno de archivo si es que existen (modo development)
require('dotenv').config({ path: 'vars.env' });

require('./models/Productos');

db.sync();

const PORT = process.env.PORT || 3000;

// Exponemos la ruta estatica para los archivos fijos
app.use('/', express.static('./assets'));
app.use('/', express.static('./public'));

app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

// Configuramos para escuchar peticiones JSON
app.use(express.json());

// Escuchamos sobre las rutas configuradas
app.use(routes);

// Escuchamos sobre el puerto indicado
app.listen(PORT, () => {
  console.log(`Servidor web activo escuchando sobre el puerto ${PORT}`);
});
