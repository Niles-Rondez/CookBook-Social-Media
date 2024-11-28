// backend/routes/profile.js
const express = require("express");
const { getProfileDetails } = require("../controllers/profile");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Get Profile Details
router.get("/", protect, getProfileDetails);

module.exports = router;
