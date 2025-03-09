import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
import mongoose from "mongoose";

export const SignUp = async(req, res, next) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // get user input
        const {name, email, password} = req.body;

        // check if user already exists
        const existingUser = await User.findOne({email});
        
        if(existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 400;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({name, email, password: hashPassword});
        const token = jwt.sign({id: newUser._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User Created Successfully',
            data: {
                token,
                user: newUser
            }
        })

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const SignIn = async(req, res, next) => {
    try{
        const {email, password} = req.body;

        // check email valid
        const user = await User.findOne({email});
        if(!user) {
            const error = new Error('Invalid Email');
            error.statusCode = 401;
            throw error;
        }

        // check password
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            const error = new Error('Incorrect Password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        res.status(200).json({
            success: true,
            message: 'User Logged In Successfully',
            data: {
                token,
                user
            }
        })

    }
    catch(error) {
        next(error);
    }
}

export const SignOut = (req, res, next) => {
    res.send('Sign Out');
}