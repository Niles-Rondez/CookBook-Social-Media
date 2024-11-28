const express = require("express");
const {
  createGroup,
  getGroups,
  joinGroup,
  leaveGroup,
  deleteGroup,
} = require("../controllers/groupController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a group
router.post("/", protect, createGroup);

// Get all groups (public or member-only)
router.get("/", protect, getGroups);

// Join a group
router.post("/:groupID/join", protect, joinGroup);

// Leave a group
router.post("/:groupID/leave", protect, leaveGroup);

// Delete a group
router.delete("/:groupID", protect, deleteGroup);

module.exports = router;
