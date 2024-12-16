const express = require("express");
const {
  createGroup,
  joinGroup,
  getGroups,
} = require("../controllers/groupController");
const router = express.Router();

// Create a new group
router.post("/", createGroup);

// Join an existing group
router.post("/join", joinGroup);

// Get all groups
router.get("/", getGroups);

// Optional: If you need to add more routes like getting a single group by ID, you can add those here
// router.get("/:groupID", getGroupById);

module.exports = router;
