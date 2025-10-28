import mongoose, { Schema } from "mongoose";

const foodCategorySchema = new Schema({
    categoryName: {type: String, requered: true }
}, {timestamps: true})
export const foodCategory = mongoose.model("Food Category", foodCategorySchema)