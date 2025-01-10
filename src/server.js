const express = require("express");
const path = require("path"); //common js module
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config static file
app.use(express.static(path.join(__dirname, "public")));

//config template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Day la trang chu");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
