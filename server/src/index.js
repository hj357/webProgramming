const express = require("express");
const syncDatabase = require("./entities/index");
const districtRouter = require("./router/district");
const postRouter = require("./router/post");
const reviewRouter = require("./router/review");
const userRouter = require("./router/user");
const restaurantRouter = require("./router/restaurant");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = 4000;

const initServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(cookieParser());

  try {
    await syncDatabase();
  } catch (e) {
    console.log("database error");
    console.log(e.message);
  }

  app.use("/user", userRouter);
  app.use("/review", reviewRouter);
  app.use("/post", postRouter);
  app.use("/restaurant", restaurantRouter);
  app.use("/district", districtRouter);

  app.get("/", (req, res, next) => {
    res.send("hellow world");
  });

  app.listen(PORT, () => {
    console.log("listening in 4000!");
  });
};

initServer();
