const { Followers, User } = require("../models");

exports.followUser = async (req, res) => {
  try {
    const { followerID, followeeID } = req.body;

    // Check if the follow relationship already exists
    const existingFollow = await Followers.findOne({
      where: {
        FollowerID: followerID,
        FolloweeID: followeeID,
      },
    });

    if (existingFollow) {
      return res.status(400).json({ message: "Already following this user." });
    }

    // Create a new follow relationship
    const follow = await Followers.create({
      FollowerID: followerID,
      FolloweeID: followeeID,
    });

    res.status(201).json({ message: "User followed successfully", follow });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const { followerID, followeeID } = req.body;

    // Check if the follow relationship exists
    const existingFollow = await Followers.findOne({
      where: {
        FollowerID: followerID,
        FolloweeID: followeeID,
      },
    });

    if (!existingFollow) {
      return res.status(400).json({ message: "Not following this user." });
    }

    // Destroy the follow relationship (unfollow)
    await existingFollow.destroy();

    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
