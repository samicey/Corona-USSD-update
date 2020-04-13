const express = require("express");
const bodyParser = require("body-parser");
const africaTalk = require("africastalking");
const logger = require("morgan");
const USSDRoute = require("./src/route/USSDRoute");

require("dotenv").config();

const app = express();

// External middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.port || "8080";

app.use("/", USSDRoute);

app.listen(port, (err) => {
  console.log("You are doing well");
});

module.exports = app;
