const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("Group", {
    groupID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    isPublic: { type: DataTypes.BOOLEAN, defaultValue: true },
  });
};
