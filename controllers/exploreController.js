import { appFirebase,auth } from "../config/firebase.js";
import { Post } from "../models/postModel.js";
import { catchAsync } from "./../utils/catchAsync.js";

export const getCompanies = catchAsync(async (req, res, next) => {
    try {
        const CompanyData = await Post.distinct('company');
        console.log('CompanyData:', CompanyData);

        // Aggregation pipeline
        // const pipeline = [
        //     {
        //         $group: {
        //             _id: '$company',
        //             reviewCount: { $sum: 1 }
        //         }
        //     },
        //     {
        //         $project: {
        //             _id: 0,
        //             company: '$_id',
        //             reviewCount: 1
        //         }
        //     },
        //     {
        //         $sort: {
        //             company: 1 // 1 for ascending order, -1 for descending order
        //         }
        //     }
        // ];

        // Execute the aggregation pipeline
        // const results = await Post.aggregate(pipeline).exec();
        // console.log('Aggregation Results:', results);

        res.status(200).json({
            status: "success",
            message: CompanyData
        });
    } catch (err) {
        console.error('Error fetching companies:', err);
        next(err);
    }
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