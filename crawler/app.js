const axios = require("axios");
const moment = require("moment");
// const fs = require("fs/promises");
// let stockCode = "";
let stockCode = "1101";
// let today = "20211015";
let today = moment().format("YYYYMMDD");
let format = "json";


// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`
// 把原本網址的參數用變數去接他，然後再由變數去轉換這樣就可以切換了
axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: format,
      date: today,
      stockNo: stockCode,
    },
  })
  .then((res) => {
    // HTTP response
    console.log(res.data);
  })
  .catch((e) => {
    console.error("出不來爆炸拉", e);
  });