const Sequelize = require("sequelize");
const sequelize = require("../db"); // Make sure your db.js file is exporting a valid Sequelize instance

// Import models
const User = require("./User")(sequelize, Sequelize.DataTypes);
const Followers = require("./Followers")(sequelize, Sequelize.DataTypes);
const Post = require("./Post")(sequelize, Sequelize.DataTypes);
const Comment = require("./Comment")(sequelize, Sequelize.DataTypes);
const Group = require("./Group")(sequelize, Sequelize.DataTypes);
const SavedPost = require("./SavedPost")(sequelize, Sequelize.DataTypes);
const Nutrient = require("./Nutrient")(sequelize, Sequelize.DataTypes);
const Ingredient = require("./Ingredient")(sequelize, Sequelize.DataTypes);

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
    models[modelName].associate(models); // Ensure associations are set up
  }
});

// Export models and Sequelize instance
module.exports = { ...models, sequelize };
