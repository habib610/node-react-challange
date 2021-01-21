import express from "express";
import expressAsyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

const postRouter = express.Router();

postRouter.post(
  "/post",
  expressAsyncHandler(async (req, res) => {
    const post = new Post({ title: req.body.title, details: req.body.details });
    const createdPost = post.save();
    res.send({
      _id: createdPost._id,
      title: createdPost.title,
      details: createdPost.details,
      message: "Posted Successfully"
    });
  })
);

postRouter.get('/allpost', expressAsyncHandler(async (req, res)=> {
  const posts = await Post.find({});
  res.send(posts)
}))

export default postRouter;
