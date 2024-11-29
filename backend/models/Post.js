const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Define the Post model
  const Post = sequelize.define("Post", {
    postID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postHeader: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    prepTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    dietType: {
      type: DataTypes.STRING, // e.g., 'keto', 'high protein'
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  });

  // Associations (One Post belongs to One User)
  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: "userID", as: "user" });
  };

  return Post;
};
