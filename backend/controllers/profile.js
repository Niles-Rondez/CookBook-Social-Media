// backend/controllers/profile.js
const User = require("../models/User");
const Post = require("../models/Post");
const SavedPost = require("../models/SavedPost");

// Get Profile Details
exports.getProfileDetails = async (req, res) => {
  try {
    // Fetch the user's details
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch user's posts
    const userPosts = await Post.find({ userID: req.user.id });

    // Fetch user's saved posts
    const savedPosts = await SavedPost.find({ userID: req.user.id }).populate(
      "postID"
    );

    res.status(200).json({
      user,
      posts: userPosts,
      savedPosts: savedPosts.map((savedPost) => savedPost.postID), // Send only the post data
    });
  } catch (error) {
    console.error("Error fetching profile details:", error);
    res.status(500).json({ error: error.message });
  }
};
