var rateSchema = require("../model/Exchange");
var mongoConfiguration = require("../mongoConfiguration");

const mongoose = require("mongoose");
const Rate = mongoose.model("Rate", rateSchema);

async function getIndexByURL(URL) {
  console.log("1");
  const rates = await Rate.find({ name: "ALTIN (TL/GR)" })
    .limit(1)
    .sort({ _id: -1 });
  console.log(rates);
}

async function createIndex(obj) {
  const sample = new Rate({
    name: obj.data,
    url: obj.url,
    value: [
      obj.value[0].value,
      obj.value[1].value,
      obj.value[2].value,
      new Date(),
    ],
  });

  const result = await sample.save();
  //console.log(result);
}

module.exports = {
  createIndex: createIndex,
  getIndexByURL: getIndexByURL,
};
