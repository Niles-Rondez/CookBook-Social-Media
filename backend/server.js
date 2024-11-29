const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const groupRoutes = require("./routes/group");
const savedPostRoutes = require("./routes/savedPost");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/saved-posts", savedPostRoutes);

// Database connection and server start
const PORT = process.env.PORT || 5000;
db.sync() // Remove { force: true } after initial setup
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Failed to sync database:", err));
