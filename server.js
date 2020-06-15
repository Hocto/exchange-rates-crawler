const ExchangeService = require("./service/ExchangeService");
var schedule = require("node-schedule");

URLS = [
  "http://bigpara.hurriyet.com.tr/altin/gram-altin-fiyati/",
  "http://bigpara.hurriyet.com.tr/altin/ceyrek-altin-fiyati/",
  "http://bigpara.hurriyet.com.tr/kobi/dunya-emtia-borsalari/sxaggr-gumus-gram/",
  "http://bigpara.hurriyet.com.tr/doviz/dolar/",
  "http://bigpara.hurriyet.com.tr/doviz/euro/",
  "http://bigpara.hurriyet.com.tr/doviz/sterlin/",
  "http://bigpara.hurriyet.com.tr/doviz/kanada-dolari/",
  "http://bigpara.hurriyet.com.tr/doviz/avustralya-dolari/",
  "http://bigpara.hurriyet.com.tr/doviz/norvec-kronu/",
];

var rule = new schedule.RecurrenceRule();
rule.second = 0;

console.log("Crawler App has started");

var job = schedule.scheduleJob(rule, () => {
  for (var i = 0; i < URLS.length; i++) {
    ExchangeService.startRequest(URLS[i]);
  }
});
