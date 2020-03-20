const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeshop', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
