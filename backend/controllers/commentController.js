const Comment = require("../models/Comment");
const Post = require("../models/Post");

// Add a comment to a post
const addComment = async (req, res) => {
  const { postID, description } = req.body;
  const userID = req.user.id; // Assuming JWT middleware attaches user ID

  try {
    // Verify the post exists
    const post = await Post.findById(postID);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Create and save the comment
    const newComment = new Comment({
      userID,
      postID,
      description,
    });
    await newComment.save();

    res.status(201).json({ message: "Comment added", comment: newComment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all comments for a post
const getCommentsByPost = async (req, res) => {
  const { postID } = req.params;

  try {
    // Fetch comments associated with the post
    const comments = await Comment.find({ postID }).populate(
      "userID",
      "username profilePicture"
    );
    if (!comments.length) {
      return res
        .status(404)
        .json({ message: "No comments found for this post" });
    }

    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  const { commentID } = req.params;
  const userID = req.user.id; // Assuming JWT middleware attaches user ID

  try {
    // Find and verify the comment
    const comment = await Comment.findById(commentID);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Check if the user is the owner of the comment
    if (comment.userID.toString() !== userID) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this comment" });
    }

    await Comment.findByIdAndDelete(commentID);
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addComment,
  getCommentsByPost,
  deleteComment,
};
