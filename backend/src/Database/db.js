import { configDotenv } from "dotenv";
import mongoose from "mongoose"


configDotenv();


const connectionString = process.env.MONGO_URI

export const ConnectDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("Connected Database")
        
    } catch (error) {
        console.log("Error connection", error)
        
    }
}