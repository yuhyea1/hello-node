// const { rejects } = require("assert");
const fs = require("fs");

// fs.readFile('input.txt','utf-8', (err, data) => {
//   if (err) {
//       console.error("發生錯誤", err);
//   } else {
//       console.log("正確讀到", data);
//   }
// });

function test(){
    return new Promise((resolve,reject)=>{
        fs.readFile('input.txt','utf-8', (err, data) => {
            if (err) {
               reject(err);
            } else {
                resolve(data);
            }
          });
    })
}
    let a = test();
    a.then((data)=>{
        console.log("你成功了阿哈哈哈",data)
    }).catch((err)=>{
        console.log("可惡",err)
    })



