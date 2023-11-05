const Post = require("../models/post");

const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.find();
    return res
      .status(201)
      .json(allPosts.map((item) => item.toObject({ getters: true })));
  } catch (err) {
    return next(err);
  }
};

const getOnePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    return res.status(201).json(post.toObject({ getters: true }));
  } catch (err) {
    return next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, content, author, date } = req.body;
    const newPost = new Post({
      author,
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
exports.getOnePost = getOnePost;
