const express = require("express");
const router = express.Router();

//import controllers

const {createComment} = require("../Controllers/commentController");

const {createPost, getAllPosts} = require("../Controllers/postController");

const {likePost, unlikePost} = require("../Controllers/likeController");

//mapping Create

router.post("/comments/create", createComment);
router.post("/posts/create", createPost); 
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;