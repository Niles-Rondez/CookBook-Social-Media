const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME, // "cookbook"
  process.env.DB_USER, // "root" or your MySQL username
  process.env.DB_PASSWORD, // your MySQL password
  {
    host: process.env.DB_HOST, // "localhost"
    dialect: "mysql",
    logging: false, // Disable logging for a cleaner console output
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Failed to connect to the database:", err));

module.exports = sequelize;
