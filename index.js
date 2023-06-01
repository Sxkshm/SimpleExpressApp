const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is a new example");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(3000, () => {
  console.log("listening");
});
