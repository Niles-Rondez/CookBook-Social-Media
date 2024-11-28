const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Followers = sequelize.define("Followers", {
  FollowerID: { type: DataTypes.INTEGER, allowNull: false },
  FolloweeID: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Followers;
