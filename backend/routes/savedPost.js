const express = require("express");
const router = express.Router();
const savedPostController = require("../controllers/savedPostController");

// Route to save a post
router.post("/", savedPostController.createSavedPost); // Create a saved post

// Route to delete a saved post
router.delete("/:userID/:postID", savedPostController.deleteSavedPost); // Delete a saved post

// Route to get saved posts for a specific user
router.get("/:userID", savedPostController.getSavedPostsByUser); // Fetch saved posts by user

module.exports = router;
