const axios = require("axios");
const moment = require("moment");
const fs = require("fs/promises");
const mysql = require("mysql");
const { resolve } = require("path");
const { rejects } = require("assert");
//因為要放到github上，但不能讓其他人知道你的密碼資訊，所以要用dotnev來隱藏起來
//在做個.env存起來，.env不能放github喔，要把.env加入ignore，然後做一個.env的
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // 本機 127.0.0.1
  // port: 3306, // 埠號 mysql 預設就是 3306
  user: process.env.DB_USER,
  // user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});
connection.connect();
//第一步建立函式，因為是個物件所以要return個 new promise然後要給他執行者
//搬非同步工作進來，成功要呼叫reslove，還有失敗
// [stockCode, firstItem[0], firstItem[1], firstItem[2], firstItem[8]]
//因為他原本是從queryData裡面直接叫出來的，但是他現在是個新的函式所以並不知道他是甚麼東西，所以直接用函式中的參數將他帶入進來
function insertPromise(insertData){
  return new Promise((resolve,reject) => {
    connection.query(
      "INSERT IGNORE INTO stock (stock_no, date, deal, amount, count) VALUES (?, ?, ?, ?, ?);",
     insertData,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}
async function queryData() {
  let today = moment().format("YYYYMMDD"); // 自動給當天的日期
  let format = "json";
  // let stockCode = "2303";
  try {
    let stockCode = await fs.readFile("stock.txt", "utf-8");
    console.log("stockCode", stockCode);

    let res = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );
    // console.log(res.data.data);
    let firstItem = res.data.data[3];
    console.log(firstItem);
    //傳入參數給insertPromise
    let reslut =await insertPromise([
      stockCode, 
      firstItem[0], 
      firstItem[1], 
      firstItem[2], 
      firstItem[8]
    ]);
    // 0, 1, 2, 8
    // sql injection
    
    console.log("insertPromise",reslut);
   
  } catch (e) {
    console.error(e);
  } finally {
    connection.end();
  }
}

queryData();