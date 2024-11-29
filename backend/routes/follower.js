const express = require("express");
const {
  followUser,
  unfollowUser,
} = require("../controllers/followerController");
const router = express.Router();

// Route for following a user
router.post("/followUser", followUser);

// Route for unfollowing a user
router.delete("/unfollowUser", unfollowUser);

module.exports = router;
