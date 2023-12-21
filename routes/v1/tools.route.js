const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all tools");
});
router.post("/", (req, res) => {
  res.send("post a tool");
});

module.exports = router;
