var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
  res.json(["Ekam", "Navdeep"]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
