// config/db.js
const { Pool } = require('pg');
const config = require('./database'); // Adjust the path if needed

// Create a new Pool instance
const pool = new Pool(config);

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL database:', res.rows[0].now);
  }
});

module.exports = pool;
