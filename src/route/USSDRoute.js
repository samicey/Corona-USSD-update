const express = require("express");
const router = express.Router();
const USSDController = require("../controllers/");

router.post("/",USSDController.USSDConnect)
      .get("/",)


module.exports = router;