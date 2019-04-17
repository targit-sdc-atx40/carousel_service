const express = require('express');
let app = express();
const port = 3004;
const db = require('../Database/config.js');

app.use(express.static('./dist'));
app.use(express.json({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/related-products', db.getProducts);

app.get('/insertinto', (req, res) => {
  db.insertProduct('hell', 'im a genius.com', 100000);
  res.send('good')
}) 

app.listen(port, () => {
  console.log(`Silently awaiting orders on port ${port}`);
})