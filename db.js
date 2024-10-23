const { Pool } = require('pg');

// PostgreSQL connection settings
const pool = new Pool({
  user: 'postgres',       // PostgreSQL username
  host: 'tcdb.c54micc800ju.us-east-1.rds.amazonaws.com',        // AWS RDS endpoint (hostname)
  database: 'tcdb',       // Database name
  password: 'rohan123',   // PostgreSQL password
  port: 5432                            // Default PostgreSQL port
});

// Function to execute queries
const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
