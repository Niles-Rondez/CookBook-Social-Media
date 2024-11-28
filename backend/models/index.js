const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = require("./User")(sequelize);
const Post = require("./Post")(sequelize);
const Comment = require("./Comment")(sequelize);
const Nutrient = require("./Nutrient")(sequelize);
const Ingredient = require("./Ingredient")(sequelize);
const SavedPost = require("./SavedPost")(sequelize);
const Group = require("./Group")(sequelize);
const UserGroup = require("./UserGroup")(sequelize);

// Relationships
User.hasMany(Post, { foreignKey: "userID" });
Post.belongsTo(User, { foreignKey: "userID" });

Post.hasMany(Comment, { foreignKey: "postID" });
Comment.belongsTo(Post, { foreignKey: "postID" });

User.belongsToMany(User, {
  through: "Followers",
  as: "Followers",
  foreignKey: "FollowerID",
  otherKey: "FolloweeID",
});

User.belongsToMany(Group, { through: UserGroup, foreignKey: "userID" });
Group.belongsToMany(User, { through: UserGroup, foreignKey: "groupID" });

module.exports = {
  User,
  Post,
  Comment,
  Nutrient,
  Ingredient,
  SavedPost,
  Group,
  UserGroup,
};
