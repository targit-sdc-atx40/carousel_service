const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize('postgres', process.env.POSTGRES_USERNAME, process.env.POSTGRESS_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  define:{
    timestamps:false
  } ,
  logging: false,
  pool: {
    min: 1,
    idle: 10000
  }
})

sequelize.authenticate()
// .then(() => console.log('Succsfully connected to DB'))
.catch((err) => console.log('Failed to connect to DB:', err))

const Products = sequelize.define('carouselproducts', {
  _id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
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

const getProducts = (productId) => Products.findAll({where: {
  _id: {[Op.between]: [productId, productId + 99]}
}});

const getById = (productId) => Products.findAll({where: {
  _id: productId
}});

const batchInsert = (arr) => {
  Products.bulkCreate(arr)
  .then(results => console.log('done'))
  .catch(err => console.log(err))
};

module.exports = {batchInsert, getById, getProducts}