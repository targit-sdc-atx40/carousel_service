const express = require('express');
const compression = require('compression');
const path = require('path');
// const db = require('../Database/postgresDB.js');
const db = require('../Database/sequelizePostDB.js');
// const db = require('../Database/mongoDB.js');
const morgan = require('morgan');
const fs = require('fs');

let app = express();
app.use(morgan("combined", { stream: fs.createWriteStream('./access.log', {flags: 'a'}) }));

app.use(compression())
app.use(express.static('./dist'));
app.use(express.json({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/related-products', (req, res, next) => {
  let randId = Math.floor((Math.random() * 10000000) + 1);
  db.getProducts(randId)
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

app.get('/loaderio-afb340a4c345bf79ee8bf5fabde1685b', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'loaderio-afb340a4c345bf79ee8bf5fabde1685b.txt'));
})

module.exports = app;