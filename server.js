const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

const connectDB = require("./config/db");
const dev = require("./config/index");
const postRoute = require("./routes/posts");
const HttpError = require("./error/http-error");

const app = express();

const port = dev.app.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", postRoute);

app.use((req, res, next) => {
  const error = new HttpError("No Such Route found", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (req.headerSent) {
    return next(error);
  }
  return res
    .status(error.code || 500)
    .json({ message: error.message || "Internal server Error" });
});

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await connectDB();
});
