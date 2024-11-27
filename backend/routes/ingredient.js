const express = require("express");
const {
  addIngredient,
  getIngredientsByPost,
} = require("../controllers/ingredientController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route to add ingredients to a post
router.post("/:postId", protect, addIngredient);

// Route to get ingredients for a specific post
router.get("/:postId", getIngredientsByPost);

module.exports = router;
