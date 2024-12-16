const express = require("express");
const { createPost, getPosts, getPostById } = require("../controllers/postController");
const router = express.Router();

router.post("/", createPost); // Add new recipe (includes ingredients & nutrition)
router.get("/", getPosts); // Get all posts
router.get("/:id", getPostById); // Get a specific post by ID

module.exports = router;
