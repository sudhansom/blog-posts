const dotenv = require("dotenv");

dotenv.config();

const dev = {
  app: {
    port: process.env.PORT,
  },
  db: {
    mongoUrl: process.env.MONGO_URL,
  },
};

module.exports = dev;
