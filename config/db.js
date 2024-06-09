import mongoose from 'mongoose';

let DB
if (process.env.NODE_ENV == "production"){
	DB = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);
}
else {
    DB = process.env.DATABASE_LOCAL;
}
export const connectDB = async() => {
    await mongoose
        .connect(DB)
        .then(() => console.group("Database Connected Succesfully!") )
        .catch(err => console.log("Error connecting database!"))
}
