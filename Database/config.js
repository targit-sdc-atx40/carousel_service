const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: 'localhost',
  port: 5432,
  database: 'carousel',
  password: process.env.POSTGRES_PASSWORD
});

const getProducts = (req, res) => {
  pool.query('SELECT * FROM productinfo', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

const insertProduct = async (title, url, price) => {
  const client = await pool.connect();
  try {
    const result = await client.query('INSERT INTO productinfo(title, photo_url, price) VALUES ($1, $2, $3)', [title, url, price])
  } catch(error) {
    console.log(error);
  } finally {
    client.release();
  }
}

module.exports = { getProducts, insertProduct};

