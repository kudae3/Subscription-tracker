import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI) {
    console.error('MongoDB connection string is required');
    process.exit(1);
}

const connectToDB = async() => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database: ${NODE_ENV}`);
    } catch (error) {
        console.error('Error connecting to the database: ', error);
        process.exit(1);
    }
}

export default connectToDB;