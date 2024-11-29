const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("Nutrient", {
    nutrientID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postID: { type: DataTypes.INTEGER, allowNull: false },
    calories: { type: DataTypes.FLOAT, allowNull: false },
    protein: { type: DataTypes.FLOAT, allowNull: false },
    fats: { type: DataTypes.FLOAT, allowNull: false },
    carbohydrates: { type: DataTypes.FLOAT, allowNull: false },
    fiber: { type: DataTypes.FLOAT, allowNull: false },
    sugar: { type: DataTypes.FLOAT, allowNull: false },
    cholesterol: { type: DataTypes.FLOAT, allowNull: false },
  });
};
