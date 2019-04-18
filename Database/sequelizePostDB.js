const Sequelize = require('sequelize');

const sequelize = new Sequelize('carousel', process.env.POSTGRES_USERNAME, process.env.POSTGRESS_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  define:{
    timestamps:false
  } 
})

sequelize.authenticate()
.then(() => console.log('Succsfully connected to DB'))
.catch((err) => console.log('Failed to connect to DB:', err))

const Products = sequelize.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Products.sync({force: true});

const batchInsert = (arr) => {
  Products.bulkCreate(arr)
  .then(results => console.log('done'))
  .catch(err => console.log(err))
}

module.exports = {batchInsert}