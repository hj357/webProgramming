const express = require("express");
const UserEntity = require("../entities/user");

const userRouter = express.Router();

userRouter.patch("/edit/:userId", async (req, res) => {
  //회원정보 수정
});

userRouter.post("/sign-up", async (req, res) => {
  //회원가입 로직
});

userRouter.post("/sign-in", async (req, res) => {
  //로그인 로직
});

userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const userData = await UserEntity.findOne({ where: { Id: userId } });
  res.json(userData);
});

module.exports = userRouter;
