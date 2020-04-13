const express = require("express");
const bodyParser = require("body-parser");
const africaTalk = require("africastalking");
const logger = require("morgan");
const USSDRoute = require("./src/route/USSDRoute");


const app = express();

// External middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.port || "8080";

app.use("/", USSDRoute);

app.get("/",(req,res)=>{
  res.status(200).json({success:true, message:"App Connected Successfully" })
})
app.listen(port, (err) => {
  console.log("You are doing well");
});

module.exports = app;
