const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("Comment", {
    commentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: { type: DataTypes.INTEGER, allowNull: false },
    postID: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    datePosted: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  });
};
