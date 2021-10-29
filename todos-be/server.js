const express = require("express");

let app = express();

app.use((req, res, next) => {
  console.log("我是aaa中間建");
  next();
});

app.use((req, res, next) => {
  let current = new Date();
  console.log(`有人來訪問 at ${current.toISOString()}`);
});

app.get("/", (req, res) => {
  console.log("我是首頁");
  res.send("我是首頁");
});

app.get("/member", (req, res) => {
  res.send("我是會員頁面");
});

app.listen(3001, () => {
  console.log("express app 啟動了唷");
});
