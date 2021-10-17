const axios = require("axios");

let stockCode = "1101";
let today = "20211015";
let format = "json";


// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`
// 把原本網址的參數用變數去接他，然後再由變數去轉換這樣就可以切換了
let res= axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: format,
      date: today,
      stockNo: stockCode,
    },
  });
async function getStock(){
    try{
        let resData = await res
        console.log(resData.data)
    }catch(e){
       console.error(e);
    }finally{
        console.log("會顯示在最後的一行")
    }
}
getStock();

//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.error("出不來爆炸拉", e);
//   });