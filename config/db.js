const Sequelize = require('sequelize');
require('dotenv').config({ path: 'vars.env' });

// Levantamos las variables de entorno
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT || 3306;
const DBNAME = process.env.DB_NAME;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

const errores = [];

if (!HOST) errores.push('Falta indicar el host');
if (!DBNAME) errores.push('Falta indicar el nombre de la base de datos');
if (!USER) errores.push('Falta indicar el nombre de usuario de la base de datos');
if (!PASS) errores.push('Falta indicar la contraseña de acceso a la base de datos');

if (errores.length) {
  throw new Error(`Se han encontrado los siguientes errores a la hora de conectar a la base de datos: ${errores.join(',')}`);
}

module.exports = new Sequelize(DBNAME, USER, PASS, {
  host: HOST,
  port: PORT,
  dialect: 'mariadb',
  define: {
    timestamps: false,
  },
  pool: {
    min: 0,
    max: 5,
    idle: 10000,
    acquire: 30000,
  },
});
