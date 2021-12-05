const express = require("express");
const PostEntity = require("../entities/post");

const postRouter = express.Router();

const OFFSET_POST_NUM = 10;

postRouter.get("/page/:pageId", async (req, res) => {
  const { pageId } = req.params;
  const offset = OFFSET_POST_NUM * (pageId - 1);
  const pageNum = await PostEntity.findAll({ limit: OFFSET_POST_NUM, offset });

  res.json(pageNum);
});

postRouter.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const postData = await PostEntity.findOne({ where: { Id: postId } });
  res.json(postData);
});

module.exports = postRouter;
