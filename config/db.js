import mongoose from 'mongoose';

const DB = process.env.DATABASE_URL
export const connectDB = async() => {
    await mongoose
        .connect(DB)
        .then(() => console.group("Database Connected Succesfully!") )
        .catch(err => console.log("Error connecting database!"))
}
