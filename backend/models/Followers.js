const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Followers = sequelize.define("Followers", {
    FollowerID: { type: DataTypes.INTEGER, allowNull: false },
    FolloweeID: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    // Ensure each follow relationship is unique
    indexes: [
      {
        unique: true,
        fields: ['FollowerID', 'FolloweeID'],
      }
    ]
  });

  return Followers;
};
