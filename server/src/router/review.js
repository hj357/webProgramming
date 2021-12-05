const express = require("express");

const reviewRouter = express.Router();

reviewRouter.get("/", (req, res, next) => {
  res.send("review");
});

reviewRouter.post("/", (req, res, next) => {
  //review 저장
});

module.exports = reviewRouter;
