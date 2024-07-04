import { AppError } from "../utils/appError";
import { catchAsync } from "./../utils/catchAsync.js";
import {User} from './../models/userModel.js';


export const signup = catchAsync(async(req,res,next) => {
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    })
})