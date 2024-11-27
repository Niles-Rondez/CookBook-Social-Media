const express = require("express");
const {
  addNutrient,
  getNutrientsByPost,
} = require("../controllers/nutrientController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route to add nutrients to a post
router.post("/:postId", protect, addNutrient);

// Route to get nutrients for a specific post
router.get("/:postId", getNutrientsByPost);

module.exports = router;
