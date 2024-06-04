import { Post } from './../models/postModel.js';
import { appFirebase,auth } from "../config/firebase.js";

export const post = async(req,res) => {
    const currentUser = auth.currentUser;
    console.log(currentUser);
    const newpost = await Post.create({
        auther: currentUser.email,
        company: req.body.company,
        type: req.body.type,
        role: req.body.role,
        content:req.body.content,
        duration: req.body.duration
    });
    res.status(200).json({
        status : "success",
        message : "posted successfully"
    })
}