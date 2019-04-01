const {Client} = require('pg');
const client = new Client({
  database: 'related_products'
})

const getProducts = (req, res) => {
  client.query('SELECT * FROM carousel', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }

  )
}
client.connect();

module.exports = {
  client,
  getProducts
};