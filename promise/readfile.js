// const { rejects } = require("assert");
const fs = require("fs");

// readFile('input.txt', (err, data) => {
// //   if (err) {
// //       console.error("發生錯誤", err);
// //   } else {
// //       console.log("正確讀到", data);
// //   }
// });

function test(){
    return new Promise((resolve,reject)=>{
        fs.readFile("input.txt", "utf-8", (err,data)=>{

            if (err) {
                // console.error("發生錯誤", err);
                reject(err);
            } else {
                // console.log("正確讀到", data);
                resolve(data);
            }
        })
    });

}
test().then((data)=>{
    console.log("正確讀到", data);
})

.catch((err)=>{
    console.error("發生錯誤", err);
});



