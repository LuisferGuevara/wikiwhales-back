const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json("SERVER OK, VAMOS A QUEMAR RUEDA!");
});

module.exports = router;
