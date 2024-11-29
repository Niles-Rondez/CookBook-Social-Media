const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING },
    middleName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    status: {
      type: DataTypes.ENUM(
        "novice chef",
        "proficient chef",
        "professional chef",
        "verified chef"
      ),
      defaultValue: "novice chef",
    },
    profilePicture: { type: DataTypes.STRING, defaultValue: "default.jpg" },
  });

  // Associations
  User.associate = (models) => {
    // Users that a user is following
    User.belongsToMany(User, {
      through: models.Followers,
      as: "Following", // Alias for the users that this user follows
      foreignKey: "FollowerID",
    });

    // Users that are following this user
    User.belongsToMany(User, {
      through: models.Followers,
      as: "Followees", // Alias for the users following this user
      foreignKey: "FolloweeID",
    });
  };

  return User;
};
