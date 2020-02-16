const Sequelize = require('sequelize');
const db = require('../config/db');

const Productos = db.define('Productos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: Sequelize.STRING(100),
        unique: true
    },
    precio: {
        type: Sequelize.DOUBLE
    },
    image: {
        type: Sequelize.STRING
    }

});

module.exports = Productos;
