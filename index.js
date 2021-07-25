const http = require("http");
const fs = require("fs");

const port = 3000; // 변경 가능

http
  .createServer((req, res) => {
    const body = "";
    req.on("data", (chunk) => {
      body += chunk; // 필요한 경우 body 사용
    });
    console.log("request arrvied");

    req.on("end", () => {
      // TODO
    });
  })
  .listen(port, () => {
    console.log("Server listening on " + port);
  });
