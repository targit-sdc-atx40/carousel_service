const express = require('express');
let app = express();
const port = process.env.PORT || 3004;
// const db = require('../Database/postgresDB.js');
// const db = require('../Database/sequelizePostDB.js');
const db = require('../Database/mongoDB.js');

app.use(express.static('./dist'));
app.use(express.json({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/related-products', (req, res) => {
  db.getProducts()
  .then((results) => {
    res.send(results);
  })
  .catch(err => {
    console.log('Failed to get 100', err);
    res.sendStatus(404);
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})