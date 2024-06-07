import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { AppError } from "./utils/appError.js";
import cors from 'cors';

dotenv.config({ path: "./config.env" });

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

import {router as userRouter} from './routes/userRoutes.js';
import {router as postRouter} from './routes/postRoutes.js';
import {router as exploreRouter} from './routes/exploreRoutes.js';

app.use("/users",userRouter);

app.use('/post',postRouter)

app.use('/explore',exploreRouter)

app.all('*',(req,res) => {
    res.status(202).json({
        status: "Unavailable",
        message:"No url exits"
    })
})