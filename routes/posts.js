const express = require("express");

const route = express.Router();
const { getAllPosts, createPost } = require("../controllers/posts");

route.get("/", getAllPosts);
route.post("/", createPost);

module.exports = route;
