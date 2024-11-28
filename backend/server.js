const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Paths
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const nutrientRoutes = require("./routes/nutrient");
const ingredientRoutes = require("./routes/ingredient");
const commentRoutes = require("./routes/comment");
const groupRoutes = require("./routes/group");
const savedPostsRoutes = require("./routes/savedPosts");
const profileRoutes = require("./routes/profile");

dotenv.config();
const app = express();

// Enable CORS for frontend (React running on localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/nutrients", nutrientRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/savedPosts", savedPostsRoutes);
app.use("/api/profile", profileRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
