const express = require('express');
const morgan = require('morgan');
// const db = require('../Database/postgresDB.js');
// const db = require('../Database/sequelizePostDB.js');
const db = require('../Database/mongoDB.js');
require('newrelic');

let app = express();

app.use(morgan('tiny'));
app.use(express.static('./dist'));
app.use(express.json({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/related-products', (req, res) => {
  db.getProducts(100)
  .then(results => {  
    res.send(results);
  })
  .catch(err => {
    console.log('Failed to get 100', err);
    res.sendStatus(404);
  })
});

app.get('/api/products/id', (req, res) => {
  const productId = parseInt(req.query.id)
  if (isNaN(productId)) {
    res.send(400);
  } else {
    let startAtFront = productId < 5000000 ? 1 : -1
    db.getById(productId, startAtFront)
    .then(results => {
      if (!Array.isArray(results)) results = [results];
      if (results.length === 0 || results[0] === null) res.sendStatus(204);
      else res.send(results);
    })
    .catch(err => {
      console.log('Failed to get by Id', err);
      res.sendStatus(204);
    })
  }
})


module.exports = app;