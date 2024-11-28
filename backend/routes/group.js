const express = require("express");
const {
  createGroup,
  joinGroup,
  getGroups,
} = require("../controllers/groupController");
const router = express.Router();

router.post("/", createGroup); // Create a group
router.post("/join", joinGroup); // Join a group
router.get("/", getGroups); // Get all groups

module.exports = router;
