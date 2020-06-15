const mongoose = require("mongoose");

var mongooseConf = mongoose
  .connect("mongodb://localhost/exchange")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.log("Error: ", err.message));

module.exports = mongooseConf;
