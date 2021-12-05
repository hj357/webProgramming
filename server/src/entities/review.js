const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const ReviewEntity = sequelize.define(
  "review",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    StarScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = ReviewEntity;
