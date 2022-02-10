import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("성공");
});

app.listen(port, () => {
  console.log(`서버 실행 (${port})`);
});
