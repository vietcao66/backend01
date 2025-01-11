const express = require("express");
const path = require("path"); //common js module
require("dotenv").config();
const configViewEngine = require("./config/viewEgine");
const webRouters = require("./routes/web");

const app = express(); // Initialize app here
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || "localhost";

// Config template engine
configViewEngine(app);

//Khai bao route
app.use("/", webRouters);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
