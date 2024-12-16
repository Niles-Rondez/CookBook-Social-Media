const { Group, UserGroup } = require("../models");

exports.createGroup = async (req, res) => {
  try {
    const { name, description, isPublic } = req.body;
    const group = await Group.create({
      name,
      description,
      isPublic,
    });
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
    // Fetch groups along with associated users if needed (use Sequelize associations if applicable)
    const groups = await Group.findAll({
      include: [
        {
          model: UserGroup, // Assuming there's an association with UserGroup model
          as: "users", // Adjust association name if different
          attributes: ["userID"], // Adjust fields if necessary
        },
      ],
    });

    // Optionally, you could map the groups data to add a `members` count based on the associated UserGroup
    const formattedGroups = groups.map(group => ({
      ...group.toJSON(),
      members: group.users ? group.users.length : 0, // Adding members count to each group
    }));

    res.status(200).json(formattedGroups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
