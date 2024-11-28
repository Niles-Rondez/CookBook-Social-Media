const express = require("express");
const {
  savePost,
  getSavedPosts,
} = require("../controllers/savedPostController");
const router = express.Router();

router.post("/", savePost); // Save a post
router.get("/:userId", getSavedPosts); // Get saved posts for a user

module.exports = router;
