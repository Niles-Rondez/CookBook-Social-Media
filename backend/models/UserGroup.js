const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("UserGroup", {
    userID: { type: DataTypes.INTEGER, allowNull: false },
    groupID: { type: DataTypes.INTEGER, allowNull: false },
  });
};
