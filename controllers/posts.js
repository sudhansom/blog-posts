const Post = require("../models/post");

const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.find();
    return res.status(201).json(allPosts);
  } catch (err) {
    return next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { id, title, content, date } = req.body;
    const newPost = new Post({
      id,
      title,
      content,
      date,
    });
    newPost.save();
    return res.status(202).json(newPost);
  } catch (err) {
    return next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id, req.body);
    return res.status(200).json(post);
  } catch (err) {
    return next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndUpdate(id, req.body);
    await post.save();
    return res.status(202).json(post);
  } catch (err) {
    return next(err);
  }
};

exports.getAllPosts = getAllPosts;
exports.createPost = createPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;
