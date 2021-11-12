const express = require("express");
const router = express.Router();

//Farmer Dashboard
router.get("/newr", function (req, res) {
  res.json("Hello running");
});

module.exports = router;
