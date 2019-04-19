const fs = require('fs');
// const {batchInsert} = require('./sequelizePostDB.js');
const {batchInsert} = require('./mongoDB.js');
const {copyInsert} = require('./postgresDB.js');

const lineReader = require('readline').createInterface({
  input: fs.createReadStream('lotsOfData.txt')
});

const buffer = (limit, cb) => {
  let chunks = [];
  let count = 0;

  lineReader.on('error', (error) => console.log('i done did messed up', error));

  lineReader.on('line', (chunk) => {
    let split = chunk.split(',');
    chunks.push({_id: parseInt(split[0]), title: split[1], photo_url: split[2], price: parseFloat(split[3])});
    if (chunks.length >= limit) {
      count++;
      console.log('Lines Read:', limit * count)
      cb(chunks, false);
      chunks = [];
    }
  })

  lineReader.on('close', () => { 
    console.log('we done did made it.');
    cb(chunks, true);
    // process.exit()
  })
}

//Uncomment Below for manual batch inserting with postgres
// buffer(20000, (data) => {
//   if (data.length > 0) {
//     batchInsert(data)
//   }
// });

//Uncomment below for copy insert of csv file with postgres
// copyInsert();

//Uncomment for batch insert with mongoDB
// buffer(50000, (data, doneReading) => {
//     batchInsert(data, doneReading);
// })