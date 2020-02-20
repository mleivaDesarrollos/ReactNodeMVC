const Productos = require('../models/Productos');

exports.home = (req, res) => {
  res.render('productos');
};

exports.traerTodos = async (req, res) => {
  // Buscamos todos los productos en la base de datos
  const productos = await Productos.findAll();
  // Si encontramos productos
  if (productos) {
    res.json(productos);
  } else {
    // Si no hay, se devuelve 404
    res.status(404).send('No hay productos cargados en base de datos');
  }
};
