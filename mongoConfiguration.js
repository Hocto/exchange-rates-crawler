const mongoose = require("mongoose");

var mongooseConf = mongoose
  .connect("mongodb://"+process.env.USER+":"+process.env.PASSWORD+"@ds255728.mlab.com:55728/"+process.env.DATABASE)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.log("Error: ", err.message));

module.exports = mongooseConf;
