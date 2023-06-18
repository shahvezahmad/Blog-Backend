//import model
const Post = require("../Models/postModel");
const Comment = require("../Models/commentModel");

exports.createComment = async (req,res) =>{
    try{
        //fetch data
        const {post, user, body} = req.body;
        //create a comment obj
        const comment = new Comment({
            post,user,body
        });

        //save the comment in db
        const savedComment = await comment.save();

        //find the post by ID, add the new comment  to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true} )
                            .populate("comments") //populate the comments array with comment documents
                            .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
}