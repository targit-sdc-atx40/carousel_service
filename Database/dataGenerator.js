const faker = require('faker');
const fs = require('fs');

faker.seed(65535);

const stream = fs.createWriteStream('lotsOfData.txt');

  for (let i = 1; i <= 10000000; i++) {
    let stringData = `${i},${faker.commerce.productName()},https://loremflickr.com/320/240?random=1,${faker.commerce.price()}\n`
    stream.write(stringData);
  }

stream.on('finish', () => console.log('finished'));

stream.end();

// node --max-old-space-size=8192 dataGenerator.js