const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
  name: String,
  url: String,
  value: [String],
});

module.exports = rateSchema;
