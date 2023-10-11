import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register =asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error('All fields are required')
    }
    const checkEmailExists= await userModel.findOne({email})
    if(checkEmailExists){
        res.status(400);
        throw new Error('Email already Exists')
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user = await userModel.create({
        username,
        email,
        password:hashedPassword
    })
    res.status(200).json({_id:user.id,email:user.email})
})
export const login =asyncHandler(async (req,res)=>{
    const{email,password}=req.body;
      if(!email || !password){
        res.status(400);
        throw new Error('All fields are required')
    }
    const user = await userModel.findOne({email});
    const comparePsswd=await bcrypt.compare(password,user.password);
    if(user && comparePsswd){
        const accessToken=jwt.sign({
            user:{
            username:user.username,
            email:user.email,
           id:user.id}
        },
        process.env.ACCESS_TOKEN,{expiresIn:"10min"})
        res.status(200).json({accessToken})

    }
    else{
    res.status(401);
    throw new Error('Invalid email or password');}

})
export const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json(req.user)
})