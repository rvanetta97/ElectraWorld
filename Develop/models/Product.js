// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true,
      validate: {
        notNull: {
          msg: 'Please enter the price',
        },
        notDecimal: {
          msg: 'Please enter a vaild price'
        }
      } 
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: '10'
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
