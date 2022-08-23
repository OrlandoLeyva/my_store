const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres_admin',
    password: '12ps34ql',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
