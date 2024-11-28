const Sequelize = require("sequelize");
const sequelize = require("../db"); // This assumes you have configured your Sequelize instance in db.js

// Import models
const User = require("./User");
const Followers = require("./Follower");
const Post = require("./Post");
const Comment = require("./Comment");
const Group = require("./Group");
const SavedPost = require("./SavedPost");
const Nutrient = require("./Nutrient");
const Ingredient = require("./Ingredient");

// Initialize models
const models = {
  User,
  Followers,
  Post,
  Comment,
  Group,
  SavedPost,
  Nutrient,
  Ingredient,
};

// Set up associations
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// Export models and Sequelize instance
module.exports = { ...models, sequelize };
