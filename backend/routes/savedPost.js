const express = require("express");
const router = express.Router();
const savedPostController = require("../controllers/savedPostController"); // Import the controller

// Route to save a post
router.post("/", savedPostController.createSavedPost);

// Route to delete a saved post
router.delete("/:userID/:postID", savedPostController.deleteSavedPost);

module.exports = router;
