const faker = require('faker');
const fs = require('fs');

faker.seed(65535);

const stream = fs.createWriteStream('lotsOfData.txt');

for (let i = 0; i < 10; i++) {
  for (let i = 0; i < 1000000; i++) {
    stream.write(`${i + ', ' + faker.commerce.productName() + ', ' + '<img src="https://loremflickr.com/320/240?random=1"/>' + ', ' + faker.commerce.price() + ',\n'}` )
  }
}

stream.on('finish', () => console.log('finished'));

stream.end();