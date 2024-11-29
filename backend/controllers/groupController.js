const { Group, UserGroup } = require("../models");

exports.createGroup = async (req, res) => {
  try {
    const { name, description, isPublic } = req.body;
    const group = await Group.create({ name, description, isPublic });
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.joinGroup = async (req, res) => {
  try {
    const { userID, groupID } = req.body;
    const userGroup = await UserGroup.create({ userID, groupID });
    res.status(201).json(userGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
