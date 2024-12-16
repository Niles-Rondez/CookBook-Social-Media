const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
const multer = require("multer");
const path = require("path");

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
const followerRoutes = require("./routes/follower"); // Import follower routes

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/saved-posts", savedPostRoutes);
app.use("/api/follow", followerRoutes); // Add follower route

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Use Multer in your post route
app.post("/api/posts", upload.single("image"), (req, res, next) => {
  req.body.imagePath = req.file ? `/uploads/${req.file.filename}` : null;
  next();
});

// Database connection and server start
const PORT = process.env.PORT || 5000;
db.sync() // Remove { force: true } after initial setup
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Failed to sync database:", err));
