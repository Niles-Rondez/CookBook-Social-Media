const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("SavedPost", {
    userID: { type: DataTypes.INTEGER, primaryKey: true },
    postID: { type: DataTypes.INTEGER, primaryKey: true },
  });
};
