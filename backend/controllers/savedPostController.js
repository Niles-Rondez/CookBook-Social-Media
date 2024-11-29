const { SavedPost, Post } = require("../models");

// Create a new saved post
exports.createSavedPost = async (req, res) => {
  try {
    const { userID, postID } = req.body;

    // Check if the post already exists in the saved posts
    const existingSavedPost = await SavedPost.findOne({
      where: { userID, postID },
    });

    if (existingSavedPost) {
      return res.status(400).json({ message: "Post already saved" });
    }

    // Create a new saved post entry
    const savedPost = await SavedPost.create({ userID, postID });

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a saved post
exports.deleteSavedPost = async (req, res) => {
  try {
    const { userID, postID } = req.params;

    // Find the saved post
    const savedPost = await SavedPost.findOne({ where: { userID, postID } });

    if (!savedPost) {
      return res.status(404).json({ message: "Saved post not found" });
    }

    // Delete the saved post
    await savedPost.destroy();

    res.status(200).json({ message: "Saved post removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all saved posts for a specific user, with post details
exports.getSavedPostsByUser = async (req, res) => {
  try {
    const { userID } = req.params;

    // Find all saved posts for the user
    const savedPosts = await SavedPost.findAll({
      where: { userID },
      include: {
        model: Post,
        as: "Post", // Include the alias here (adjust the alias as per your association)
        attributes: ["postHeader", "description", "prepTime", "dietType"], // Include post details
      },
    });

    if (savedPosts.length === 0) {
      return res
        .status(404)
        .json({ message: "No saved posts found for this user" });
    }

    res.status(200).json(savedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
