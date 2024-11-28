// backend/routes/savedPosts.js
const express = require("express");
const {
  savePost,
  getSavedPosts,
  removeSavedPost,
} = require("../controllers/savedPosts");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Save a Post
router.post("/", protect, savePost);

// Get All Saved Posts
router.get("/", protect, getSavedPosts);

// Remove a Saved Post
router.delete("/:id", protect, removeSavedPost);

module.exports = router;
