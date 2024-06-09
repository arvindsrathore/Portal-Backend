import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { appFirebase,auth } from "../config/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { catchAsync } from "./../utils/catchAsync.js";

export const details = catchAsync(async (req,res) => {
    const user = auth.currentUser;

    try {
        if(user){
            res.status(200).json({
                status: "success",
                message: {
                    "Email ": user.email
                }
                });
        }
        res.status(200).json({
            status:"failure"
        })
        
    } catch (error) {
        console.log(error);
    }

});

export const register = catchAsync(async (req, res) => {
    console.log("here comes");
    try {
      const { email, password, fullName, age } = req.body;
      console.log(email);
  
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; 
      console.log(user);
  
      res.status(200).json({
          status: "success",
          message: "Signup Successful"
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({
          status: "failure",
          message: error
        });
    }
});

export const login = catchAsync(async(req, res) => {
    try{
        const {email, password} = req.body;
        const userCredential = await signInWithEmailAndPassword(auth,email, password)
    
        var user = userCredential.user;
        res.status(200).json({
            status: "success",
            message: `Login Successful for Username ${user.email}`
        });
    } catch(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        res.status(202).json({
            status: "failed",
            message: errorMessage
        });
    };
});

export const logout = catchAsync(async(req , res) => {
    try {
        await signOut(auth);
        
        res.status(200).json({
            status: "success",
            message: "Logout Successful"
        });
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.status(202).json({
            status: "failed",
            message: errorMessage
        });
    }
});