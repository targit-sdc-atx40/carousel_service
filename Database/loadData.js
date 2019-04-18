const fs = require('fs');
const {batchInsert} = require('./index.js');
const {copyInsert} = require('./config.js');

const lineReader = require('readline').createInterface({
  input: fs.createReadStream('lotsOfData.txt')
});

const buffer = (cb) => {
  let chunks = [];

  lineReader.on('error', (error) => console.log('i done did messed up', error));

  lineReader.on('line', (chunk) => {
    let split = chunk.split(',');
    chunks.push({title: split[0], photo_url: split[1], price: parseFloat(split[2])});
    if (chunks.length >= 20000) {
      cb(chunks);
      chunks = [];
    }
  })

  lineReader.on('close', () => { 
    console.log('we done did made it.');
    cb(chunks);
  })
}

//Uncomment Below for manual batch inserting
// buffer((data) => {
//   batchInsert(data)
// });

//Uncomment below for copy insert of csv file
copyInsert();