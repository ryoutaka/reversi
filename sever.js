const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname + "/build")));

app.listen(port, () => {
  console.log("start");
});
