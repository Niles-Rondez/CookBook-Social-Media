const Group = require("../models/Group");

// Create a new group
const createGroup = async (req, res) => {
  const { name, description, isPublic } = req.body;

  try {
    const groupExists = await Group.findOne({ name });
    if (groupExists) {
      return res.status(400).json({ message: "Group name already exists" });
    }

    const newGroup = new Group({
      name,
      description,
      isPublic,
      members: [req.user.id], // Add the creator as the first member
    });

    await newGroup.save();
    res
      .status(201)
      .json({ message: "Group created successfully", group: newGroup });
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all groups (public or user is a member)
const getGroups = async (req, res) => {
  try {
    const groups = await Group.find({
      $or: [{ isPublic: true }, { members: req.user.id }],
    }).populate("members", "username");

    res.status(200).json(groups);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Join a group
const joinGroup = async (req, res) => {
  const { groupID } = req.params;

  try {
    const group = await Group.findById(groupID);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    // Check if user is already a member
    if (group.members.includes(req.user.id)) {
      return res
        .status(400)
        .json({ message: "You are already a member of this group" });
    }

    group.members.push(req.user.id);
    await group.save();

    res.status(200).json({ message: "Joined group successfully", group });
  } catch (error) {
    console.error("Error joining group:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Leave a group
const leaveGroup = async (req, res) => {
  const { groupID } = req.params;

  try {
    const group = await Group.findById(groupID);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    // Remove user from members list
    group.members = group.members.filter(
      (member) => member.toString() !== req.user.id
    );
    await group.save();

    res.status(200).json({ message: "Left group successfully", group });
  } catch (error) {
    console.error("Error leaving group:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a group (Admin/Creator only)
const deleteGroup = async (req, res) => {
  const { groupID } = req.params;

  try {
    const group = await Group.findById(groupID);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    // Only allow deletion if the user is the creator
    if (!group.members[0].equals(req.user.id)) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this group" });
    }

    await Group.findByIdAndDelete(groupID);
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createGroup,
  getGroups,
  joinGroup,
  leaveGroup,
  deleteGroup,
};
