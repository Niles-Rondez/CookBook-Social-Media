// backend/controllers/savedPosts.js
const SavedPost = require("../models/SavedPost");
const Post = require("../models/Post");

// Save a Post
exports.savePost = async (req, res) => {
  const { postID } = req.body;

  try {
    const savedPost = await SavedPost.findOne({ userID: req.user.id, postID });
    if (savedPost) {
      return res.status(400).json({ message: "Post already saved" });
    }

    const newSavedPost = new SavedPost({
      userID: req.user.id,
      postID,
    });

    await newSavedPost.save();
    res
      .status(201)
      .json({ message: "Post saved successfully", savedPost: newSavedPost });
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get All Saved Posts for a User
exports.getSavedPosts = async (req, res) => {
  try {
    const savedPosts = await SavedPost.find({ userID: req.user.id }).populate(
      "postID"
    );
    res.status(200).json(savedPosts);
  } catch (error) {
    console.error("Error retrieving saved posts:", error);
    res.status(500).json({ error: error.message });
  }
};

// Remove a Saved Post
exports.removeSavedPost = async (req, res) => {
  const { postID } = req.body;

  try {
    const savedPost = await SavedPost.findOneAndDelete({
      userID: req.user.id,
      postID,
    });
    if (!savedPost) {
      return res.status(404).json({ message: "Saved post not found" });
    }

    res.status(200).json({ message: "Saved post removed successfully" });
  } catch (error) {
    console.error("Error removing saved post:", error);
    res.status(500).json({ error: error.message });
  }
};
