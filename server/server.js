const express = require('express');
const path = require("path");
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const db = require('../Database/config.js');

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/related-products', db.getProducts);

app.listen(port, () => {
  console.log(`Silently awaiting orders on port ${port}`);
});