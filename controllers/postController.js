import { Post } from './../models/postModel.js';
import { appFirebase,auth } from "../config/firebase.js";
import { catchAsync } from "./../utils/catchAsync.js";

export const post = catchAsync(async(req,res) => {
    try {
        
    const currentUser = auth.currentUser;
    const newpost = await Post.create({
        auther: currentUser.email,
        company: req.body.company,
        type: req.body.type,
        role: req.body.role,
        content:req.body.content,
        duration: req.body.duration,
        location:req.body.location,
        salary: req.body.salary
    });
    res.status(200).json({
        status : "success",
        message : "posted successfully"
    })
    } catch (error) {
      
    res.status(401).json({
        status : "failure",
        message : "unsuccessful"
    })  
    }
});

export const insertPosts = catchAsync(async (req,res) => {
    try {
        const posts = req.body;
        const createdPosts = await Promise.all(posts.map(async (post) => {
            const newpost = await Post.create({
                author: post.author,
                company: post.company,
                type: post.type,
                role: post.role,
                content: post.content,
                duration: post.duration,
                location: post.location,
                salary: post.salary
            });
            return newpost;
        }));

        res.status(200).json({
            status : "success",
            message : "posted all reviews successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            status : "failure",
            message : "unsuccessful"
        })
    }
});
