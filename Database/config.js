const {Client} = require('pg');
const client = new Client({
  host: 'relatedproducts.cz85drywbdns.us-east-2.rds.amazonaws.com',
  port: 5432,
  user: 'dlockliear',
  database: 'related_products',
  password: 'password'
})

const getProducts = (req, res) => {
  client.query('SELECT * FROM carousel', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

client.connect();

module.exports = {
  client,
  getProducts
};

