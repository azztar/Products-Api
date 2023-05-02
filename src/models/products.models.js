const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Products = db.define("products", {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   name: {
    type: DataTypes.STRING,
    allowNull: false
   },
   description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
        len: [1, 250]
      }
   },
   price: {
    type: DataTypes.DECIMAL,
    allowNull: false
   },
   stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: [1, 250]
    }
   }
});

module.exports = Products;


// "id" :1,
// "name": "Macbook pro M2",
// "description": "Chip M2 de Apple CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia GPU de 10 núcleos Neural Engine de 16 núcleos 100 GB/s de ancho de banda de memoria",
// "price": 1800.00,
// "stock": 20