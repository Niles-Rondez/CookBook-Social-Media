const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const groupRoutes = require("./routes/group");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/groups", groupRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
