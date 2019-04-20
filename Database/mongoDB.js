const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/Carousel';
mongoose.connect(uri, {useNewUrlParser: true}, (err, db) => {
  if (err) console.log(err);
});

const dbSchema = mongoose.Schema({
  _id: 'Number',
  title: 'String',
  photo_url: 'String',
  price: 'Number'
})

const Carousel = mongoose.model('carouselProducts', dbSchema);

const getProducts = () => Carousel.find().limit(100);

const getById = (productId) => Carousel.findOne({_id: productId});

const batchInsert = (batchArr, doneReading) => {
  if(!doneReading) {
    Carousel.collection.insert(batchArr)
    .then(() => {
      console.log('documents inserted');
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    setTimeout(() => process.exit(), 500);
  }
};

module.exports = {batchInsert, getProducts, getById};