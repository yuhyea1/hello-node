//cjs的方式來加入axious模組;
const axios = require("axios");
//加入moment這個關於日期時間模組，來代替原本的設定today變數的"固定時間",
//就可以用套件傳回當天的西元年月日，來達到每天使用他的時候都會更新到他的檔案
const moment = require("moment");
//使用fs 這個套件裏頭的東西
// const fs = require("fs/promises");
// let stockCode = "";
let stockCode = "110101";
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