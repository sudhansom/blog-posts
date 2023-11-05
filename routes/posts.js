const express = require("express");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.json({ message: "gell all posts" });
});

route.get("/:id", (req, res, next) => {
  let id = req.params.id;
  res.json({ message: "gell  posts of id" + id });
});

route.post("/", (req, res, next) => {
  res.json({ post: req.body });
});

module.exports = route;
