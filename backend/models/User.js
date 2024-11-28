const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("User", {
    userID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM(
        "novice chef",
        "proficient chef",
        "professional chef",
        "verified chef"
      ),
      defaultValue: "novice chef",
    },
    profilePicture: { type: DataTypes.STRING, defaultValue: "default.png" },
  });
};
