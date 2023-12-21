const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("get all tools");
// });
// router.post("/", (req, res) => {
//   res.send("post a tool");
// });

router
  .route("/")
  .get((req, res) => {
    res.send("get all tools here ");
  })
  .post((req, res) => {
    res.send("add a tool");
  });

module.exports = router;
