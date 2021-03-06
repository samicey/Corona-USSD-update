const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const USSDRoute = require("./src/route/USSDRoute");
const cors = require("cors");

const app = express();

// External middlewares
app.use(cors())
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 8080));

app.use("/", USSDRoute);

app.listen(app.get('port'), (err) => {
  console.log("You are doing well");
});

module.exports = app;
