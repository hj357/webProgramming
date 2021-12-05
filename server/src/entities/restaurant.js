const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const RestaurantEntity = sequelize.define(
  "restaurant",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RestaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TelephoneNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = RestaurantEntity;
