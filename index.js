var express = require("express");
var path = require("path");
const app = express();

app.use(express.static("frontend/dist"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.listen(8000);
