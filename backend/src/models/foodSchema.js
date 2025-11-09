import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
  {
    foodname: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);
export const Food = mongoose.model("Food", foodSchema);
