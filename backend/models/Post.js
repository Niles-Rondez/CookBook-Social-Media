const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("Post", {
    postID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    postHeader: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    prepTime: { type: DataTypes.STRING, allowNull: false },
    dateCreated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    dietType: { type: DataTypes.STRING }, // e.g., 'keto', 'high protein'
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  });
};
