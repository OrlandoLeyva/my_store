const {Sequelize} = require('sequelize');
const setupModels = require('../db/models/index.models');
const {environment} = require('../environment/environment.config');

const USER = encodeURIComponent(environment.dbUser);
const PASSWORD = encodeURIComponent(environment.dbPassword);

// const URI = `postgres://${USER}:${PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;

const sequelizeOptions = {
  dialect: 'postgres',
  logging: environment.isProd ? false : true
}

if(environment.isProd){
  sequelizeOptions.ssl = {
    rejectUnauthorized:false
  }
}

const sequelize = new Sequelize(environment.dbUrl,sequelizeOptions);

setupModels(sequelize);
// sequelize.sync();

module.exports = sequelize;
