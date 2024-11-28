const express = require("express");
const {
  addComment,
  getCommentsByPost,
  deleteComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Add a comment
router.post("/", protect, addComment);

// Get all comments for a specific post
router.get("/:postID", protect, getCommentsByPost);

// Delete a comment
router.delete("/:commentID", protect, deleteComment);

module.exports = router;
