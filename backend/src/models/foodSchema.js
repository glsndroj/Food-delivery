import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
    food: {type: String, requered: true },
    price: { type: Number, requered: true },
    image: { type: String, required: true },
    ingredients: {type: String, requered: true },
    category: { type: Schema.Types.ObjectId, ref: "Category"}
}, {timestamps: true})
export const food = mongoose.model("Foods", foodSchema)