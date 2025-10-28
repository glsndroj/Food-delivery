import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
    foodName: {type: String, requered: true }
}, {timestamps: true})
export const food = mongoose.model("Food Category", foodSchema)