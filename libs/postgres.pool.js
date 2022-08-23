const { Pool } = require('pg');
const {environment} = require('../environment/environment.config');

const USER = encodeURIComponent(environment.dbUser);
const PASSWORD = encodeURIComponent(environment.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`

  const pool = new Pool({connectionString: URI});


module.exports = pool;
