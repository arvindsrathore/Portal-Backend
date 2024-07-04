import { catchAsync } from "../utils/catchAsync.js";
import { AppError } from "../utils/appError.js";
import { GoogleGenerativeAI } from "@google/generative-ai";


export const getResponse = catchAsync(async (req, res, next) => {
    const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);
    const model = genAI.getGenerativeModel({model : "gemini-pro"});
    
    var prompt = req.body.prompt;
    prompt = "Describe about this company called " + prompt + " in 40 words only in a paragraph";

    const result = await model.generateContent(prompt);
    const response = result.response.candidates[0].content.parts[0].text;

    res.status(200).json({
        status : "success",
        response : response,
        prompt:prompt
    });
});