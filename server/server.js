const express = require('express');
let app = express();
const port = process.env.PORT || 3004;
// const db = require('../Database/index.js');
const db = require('../Database/config.js');

app.use(express.static('./dist'));
app.use(express.json({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/related-products', db.getProducts);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})