const { Sequelize } = require('sequelize');

//importar modelo
const product = require('./models/product')
const review = require('./models/review')
const user = require('./models/user')
const order = require('./models/order')



//coneccion de base de datos

const sequelize = new sequelize('ecommerce-api',root,root,{

    host: 'localhost',
    dialect : 'mariadb',
    logging : false


})


//getting  models
const models = [product,review,order,user]


//registering  models  into sequelize

for (let models of models){
models(sequelize);
}


//relaciones
const {products,reviews,users,orders } = equelize.models;
reviews.belongsTo(products);
orders.belongsTo(users);
orders.belongsTo(products)


module.exports = Sequelize; 