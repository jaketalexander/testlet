const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PORT,
// });

pool.connect()
  .then(() => {
    console.log('Successfully Connected');
  });

const query = (text, params, callback) => pool.query(text, params, callback);

module.exports = { query };
