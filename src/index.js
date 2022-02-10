import express from "express";

const app = express();
const port = 3000;

const mechanic = [
  { id: 1, name: "건담", model: "RX-78-2" },
  { id: 2, name: "건탱크", model: "RX-75" },
  { id: 3, name: "자쿠II", model: "MS-06F" }
];

app.get("/mechanic", (req, res) => {
  res.json(mechanic);
});

app.listen(port, () => {
  console.log(`서버 실행 (${port})`);
});
