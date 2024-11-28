const { SavedPost } = require("../models"); // Import the SavedPost model

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
