const Post = require("../models/Post");
require("../config/database");

exports.get_all_posts = async (req, res) => {
    try {
        const allPost = await Post.find();
        res.json(allPost);
      } catch (err) {
        res.json({ msg: err });
      }
};

exports.create_post = async (req, res) => {
    const post = new Post({
        text: req.body.text
      });
    
      try {
        const savedPost = await post.save();
        res.json(savedPost);
      } catch (err) {
        res.json({ msg: err });
      }
};

exports.delete_post = async (req, res) => {
    try {
        const deletePost = await Post.deleteOne({ _id: req.params.postID });
        res.json(deletePost);
      } catch (err) {
        res.json({ msg: err });
      }
};