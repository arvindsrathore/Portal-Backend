import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { AppError } from "./utils/appError.js";
import { globalErrorHandler } from "./controllers/errorController.js"
import cors from 'cors';

dotenv.config({ path: "./config.env" });

export const app = express();

let corsOptions = {
    origin : ['http://localhost:3000'],
}
// app.use(cors(corsOptions));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

import {router as userRouter} from './routes/userRoutes.js';
import {router as postRouter} from './routes/postRoutes.js';
import {router as exploreRouter} from './routes/exploreRoutes.js';
import {router as genAIRouter} from './routes/genAIroutes.js';

app.use("/users",userRouter);

app.use('/post',postRouter)

app.use('/explore',exploreRouter)

app.use("/genAI", genAIRouter);

app.all('*',(req,res) => {
    res.status(202).json({
        status: "Unavailable",
        message:"No url exits"
    })
})

app.use(globalErrorHandler);