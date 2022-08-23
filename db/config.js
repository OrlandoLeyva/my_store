const {environment} = require('../environment/environment.config');

const USER = encodeURIComponent(environment.dbUser);
const PASSWORD = encodeURIComponent(environment.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
