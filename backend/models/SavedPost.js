const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const SavedPost = sequelize.define("SavedPost", {
    userID: { type: DataTypes.INTEGER, primaryKey: true },
    postID: { type: DataTypes.INTEGER, primaryKey: true },
  });

  // Define association between SavedPost and Post
  SavedPost.associate = (models) => {
    SavedPost.belongsTo(models.Post, { foreignKey: "postID", as: "Post" }); // Adding association to Post
  };

  return SavedPost;
};
