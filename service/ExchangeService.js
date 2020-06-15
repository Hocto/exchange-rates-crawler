// Write Javascript code here
const request = require("request");
const cheerio = require("cheerio");
const ExchangeRepository = require("../repository/ExchangeRepository");

var URL;

function startRequest(URL) {
  request(URL, function (err, res, body) {
    if (err) {
      console.log(err);
    } else {
      var obj = {};
      var $ = cheerio.load(body);
      $("div.contentLeft>div.kurDetail>div.kurBox").each(function (index) {
        var data, value;
        if (index == 0) {
          data = $(this).parents().parents().find(">h1.pageTitle").text();
          value = URL;
          obj = arr({}, data, value, index);
        } else if (index == 3) {
          data = $(this).find("span.text").text();
          value = $(this).find("span.text2").text();
          obj = arr(obj, data, value, index);
        } else {
          data = $(this).find("span.text").text();
          value = $(this).find("span.value ").text();
          obj = arr(obj, data, value, index);
        }
      });
      ExchangeRepository.createIndex(obj);
      //ExchangeRepository.getIndexByURL("1");
    }
  });
}

function arr(object, data, value, index) {
  if (index == 0) {
    const obj = {
      data: data,
      url: value,
      value: [],
    };
    object = obj;
  } else {
    const obj = {
      type: data,
      value: value,
    };

    var arr = object["value"];
    arr.push(obj);
    object["value"] = arr;
  }
  return object;
}

module.exports = {
  startRequest: startRequest,
  arr: arr,
};
