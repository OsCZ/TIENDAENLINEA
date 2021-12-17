const { DataTypes } = require('sequelize');

// Tabla en mi base de datos Mariadb
module.exports = (sequelize) => sequelize.define('reviews', {
//id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
content: DataTypes.STRING,
productId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
