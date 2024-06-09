import { appFirebase,auth } from "../config/firebase.js";
import { Post } from "../models/postModel.js";
import { catchAsync } from "./../utils/catchAsync.js";

export const getCompanies = catchAsync(async(req,res) => {
    const CompanyData = await Post.distinct('company');
    const pipeline = [
        {
            $group: {
                _id: '$company',
                reviewCount: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                company: '$_id',
                reviewCount: 1
            }
        },
        {
            $sort: {
                company: 1 // 1 for ascending order, -1 for descending order
            }
        }
    ]; 
    const results = await Post.aggregate(pipeline).exec();

    res.status(200).json({
        status : "success",
        message : results
    })
});

export const getdetails = catchAsync(async(req,res) => {
    const company = req.params.company
    const allPosts = await Post.find({company : company});
    
    res.status(200).json({
        status : "success",
        message : allPosts
    })
});

export const getpost = catchAsync(async(req,res) => {
    const reviewId = req.params.reviewId
    const currPost = await Post.find({"_id" : reviewId});
    
    res.status(200).json({
        status : "success",
        message : currPost[0]
    })
});

export const getInternships = catchAsync(async(req,res) => {
    const allInternships = await Post.find({type: "Internship"});
    res.status(200).json({
        status : "success",
        message : allInternships 
    })
});

export const getFTE = catchAsync(async(req,res) => {
    const allFTE = await Post.find({type: "FTE"});
    res.status(200).json({
        status : "success",
        message : allFTE 
    })
});