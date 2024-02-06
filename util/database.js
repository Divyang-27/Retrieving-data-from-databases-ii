const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', '16122019d', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
