const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
// const db = require('../Database/postgresDB.js');
const db = require('../Database/sequelizePostDB.js');
// const db = require('../Database/mongoDB.js');

let app = express();

// app.use(morgan('tiny'));
app.use(compression())
app.use(express.static('./dist'));
app.use(express.json({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/related-products', (req, res, next) => {
  db.getProducts(100)
  .then(results => {  
    res.send(results);
  })
  .catch(next)
});

app.get('/api/products/id', (req, res, next) => {
  const productId = parseInt(req.query.id)
  if (isNaN(productId)) {
    res.send(400);
  } else {
    db.getById(productId)
    .then(results => {
      if (!Array.isArray(results)) results = [results];
      if (results.length === 0 || results[0] === null) res.sendStatus(204);
      else res.send(results);
    })
    .catch(next)
  }
})

module.exports = app;