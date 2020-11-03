const express = require("express");
const app = express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/list", (req, res) => {
  const list = [
    {
      id: 1,
      name: "zhangsan",
    },
    {
      id: 2,
      name: "lisi",
    },
    {
      id: 3,
      name: "wangwu",
    },
  ];
  res.send(list);
});

app.listen(3000, () => {
  console.log("listen port 3000");
});
