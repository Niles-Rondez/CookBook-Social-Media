const Post = require("../models/Post");

const createPost = async (req, res) => {
  const { postHeader, description, prepTime, dietType, imageUrl } = req.body;

  try {
    const newPost = new Post({
      userId: req.user.id,
      postHeader,
      description,
      prepTime,
      dietType,
      imageUrl,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error creating post." });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate(
      "userId",
      "username profilePicture"
    );
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error fetching posts." });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "userId",
      "username profilePicture"
    );
    if (!post) return res.status(404).json({ message: "Post not found." });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error fetching post." });
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found." });

    if (post.likes.includes(req.user.id)) {
      post.likes = post.likes.filter((id) => id !== req.user.id);
    } else {
      post.likes.push(req.user.id);
    }

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error liking post." });
  }
};

module.exports = { createPost, getAllPosts, getPostById, likePost };
