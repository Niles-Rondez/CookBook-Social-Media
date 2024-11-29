const { Comment } = require("../models");

exports.addComment = async (req, res) => {
  try {
    const { userID, postID, description } = req.body;
    const comment = await Comment.create({ userID, postID, description });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { postID: req.params.postId },
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
