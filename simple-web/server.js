// 開一個網站 -- 套件:
// -自己開發
// -用第三方的
// -用內建
const fs = require("fs");
const http = require("http");

const server = http.createServer(async (request, response) => {
  console.log(request.url);
  let path = request.url;

  response.setHeader("Content-Type", "text/html;charset=UTF-8");
  switch (path) {
    case "/":
      response.end("這是首頁");
      break;
    case "/member":
      let htmlContent = await fs.readFile("member.html", "utf-8");
      response.end(htmlContent);
      break;
    default:
      response.statusCode = 404;
      response.end("Not Found");
  }
});