const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

const connectDB = require("./config/db");
const dev = require("./config/index");
const postRoute = require("./routes/posts");

const app = express();

const port = dev.app.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", postRoute);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await connectDB();
});
