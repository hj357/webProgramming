//
const sequelize = require("../loader/connect-database");
const UserEntity = require("./user");
const ReviewEntity = require("./review");
const RestaurantEntity = require("./restaurant");
const PostEntity = require("./post");
const DistrictEntity = require("./district");

// const syncDatabase = () => {
//   console.log("database sync");
// };

// module.exports = syncDatabase;

const syncDatabase = () => {
  UserEntity.hasMany(PostEntity, {
    foreignKey: { name: "user_Id", allowNull: false },
    onDelete: "cascade",
    onUpdate: "cascade",
  });
  UserEntity.hasMany(ReviewEntity, {
    foreignKey: { name: "user_Id", allowNull: false },
    onDelete: "cascade",
    onUpdate: "cascade",
  });
  DistrictEntity.hasMany(UserEntity, {
    foreignKey: { name: "district_Id", allowNull: false },
    onDelete: "cascade",
    onDelete: "cascade",
  });
  DistrictEntity.hasMany(RestaurantEntity, {
    foreignKey: { name: "district_Id", allowNull: false },
    onDelete: "cascade",
    onUpdate: "cascade",
  });
  RestaurantEntity.hasMany(ReviewEntity, {
    foreignKey: { name: "restaurant_Id", allowNull: false },
    onDelete: "cascade",
    onUpdate: "cascade",
  });

  sequelize.sync();
};
module.exports = syncDatabase;
