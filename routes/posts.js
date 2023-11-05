const express = require("express");

const route = express.Router();
const {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  getOnePost,
} = require("../controllers/posts");

route.get("/", getAllPosts);
route.get("/:id", getOnePost);
route.post("/", createPost);
route.delete("/:id", deletePost);
route.put("/:id", updatePost);

module.exports = route;
