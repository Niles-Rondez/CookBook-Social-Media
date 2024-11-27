const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  likePost,
} = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route to create a post
router.post("/", protect, createPost);

// Route to get all posts
router.get("/", getAllPosts);

// Route to get a single post by ID
router.get("/:id", getPostById);

// Route to like a post
router.put("/:id/like", protect, likePost);

module.exports = router;
