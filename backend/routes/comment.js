const express = require("express");
const {
  addComment,
  getCommentsByPost,
} = require("../controllers/commentController");
const router = express.Router();

router.post("/", addComment); // Add a comment
router.get("/:postId", getCommentsByPost); // Get comments for a specific post

module.exports = router;
