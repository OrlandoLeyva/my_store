const {Sequelize} = require('sequelize');
const setupModels = require('../db/models/index.models');
const {environment} = require('../environment/environment.config');

const USER = encodeURIComponent(environment.dbUser);
const PASSWORD = encodeURIComponent(environment.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: false
});

setupModels(sequelize);
// sequelize.sync();

module.exports = sequelize;
