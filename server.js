const express = require("express");
const app = express();

const port = process.env.PORT || 3456;

app.get("/", (req, res) => {
  res.send("Hello.");
});

app.get("/test", (req, res) => {
  res.send("Hello test.");
});

app.get("/work", (req, res) => {
  res.send("Hello work.");
});

app.listen(port, () => console.log(`app listening at port ${port}`));
