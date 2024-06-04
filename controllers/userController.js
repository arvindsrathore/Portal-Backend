import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { appFirebase,auth } from "../config/firebase.js";


export const details = async (req,res) => {
    const user = auth.currentUser;

    console.log("User ID:", user.uid);
    console.log("Email:", user.email);
    console.log("Display Name:", user.displayName);
    console.log("Photo URL:", user.photoURL);
    console.log("Email Verified:", user.emailVerified);
    console.log("Phone Number:", user.phoneNumber);
    console.log("Provider Data:", user.providerData);

    res.status(200).json({
      status: "success",
      message: {
        "Email ": user.email
      }
    });
};

export const register = async (req, res) => {
    console.log("here comes");
    try {
      const { email, password } = req.body;
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
      res.status(201).json({
          status: "failed",
          message: error
        });
    }
};

export const login = async(req, res) => {
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
};

export const logout = async(req , res) => {
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
};