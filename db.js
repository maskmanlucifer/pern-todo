const Pool  = require('pg').Pool;

const pool = new Pool({
  user:'postgres',
  password:'xxxx',
  database:"perntodo",
  host:"localhost",
  port:5432
});

module.exports = pool;