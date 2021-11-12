const express = require("express");

var app = express();

app.get("/", (req, res) => {
  console.log("Hello gee");
  res.send("Home");
});

app.listen(8081, () => {
  console.log("Server running 8081");
});
