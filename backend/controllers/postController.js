const { Post, User } = require("../models"); // Ensure this is correct

exports.createPost = async (req, res) => {
  try {
    const { userID, postHeader, description, prepTime, dietType } = req.body;
    const post = await Post.create({
      userID,
      postHeader,
      description,
      prepTime,
      dietType,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        as: "user", // Make sure to match the alias used in the association
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: {
        model: User,
        as: "user", // Make sure to match the alias used in the association
      },
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
