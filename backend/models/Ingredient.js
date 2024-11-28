const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("Ingredient", {
    ingredientID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postID: { type: DataTypes.INTEGER, allowNull: false },
    ingredientName: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false }, // e.g., 'grams', 'cups'
  });
};
