const express = require("express");

const route = express.Router();
const {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/posts");

route.get("/", getAllPosts);
route.post("/", createPost);
route.delete("/:id", deletePost);
route.put("/:id", updatePost);

module.exports = route;
