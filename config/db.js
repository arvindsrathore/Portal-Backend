import mongoose from 'mongoose';

// let DB
// if (process.env.NODE_ENV == "production"){
// 	DB = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);
// }
// else {
//     DB = process.env.DATABASE_LOCAL;
// }
const DB = 'mongodb+srv://kingseniorone:E8ahAi7kHUA3nChy@portal.yvszjzw.mongodb.net/?retryWrites=true&w=majority&appName=Portal'
export const connectDB = async() => {
    await mongoose
        .connect(DB)
        .then(() => console.group("Database Connected Succesfully!") )
        .catch(err => console.log("Error connecting database!  " + err))
}
