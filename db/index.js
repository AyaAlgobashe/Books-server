const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost/books";

const dbConnection = mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to MondgoDB..."))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

module.exports = dbConnection;
