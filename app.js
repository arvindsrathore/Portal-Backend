import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { AppError } from "./utils/appError.js";

dotenv.config({ path: "./config.env" });

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

import {router as userRouter} from './routes/userRoutes.js';
import {router as postRouter} from './routes/postRoutes.js';
import {router as exploreRouter} from './routes/exploreRoutes.js';

app.use("/users",userRouter);

app.use('/check',postRouter)

app.use('/explore',exploreRouter)

app.all('*',(req,res) => {
    res.status(202).json({
        status: "Unavailable",
        message:"No url exits"
    })
})