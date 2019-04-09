const express = require('express');
const path = require("path");
let app = express();
const port = 3003;
const bodyParser = require('body-parser');
const db = require('../Database/config.js');

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/related-products', db.getProducts);

app.listen(port, () => {
  console.log(`Silently awaiting orders on port ${port}`);
})