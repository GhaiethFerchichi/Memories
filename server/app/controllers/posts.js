import PostMessage from "../models/Posts.js";

export const getAllPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json({
      success: true,
      message: postMessages,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;
  const newPost = new PostMessage(postBody);
  try {
    const savedPost = await newPost.save();
    res.status(201).json({ success: true, data: savedPost });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
