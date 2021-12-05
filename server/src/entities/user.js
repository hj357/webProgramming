const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const UserEntity = sequelize.define(
  "user",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    NickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CardNum: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IsAdmin: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = UserEntity;
