import { Food } from "../models/foodSchema.js";

export const createFood = async (req, res) => {
  console.log(req.body);
  try {
    const newFood = await Food.create(req.body);
    console.log("working");
    res
      .status(200)
      .json({ message: "Food successfully created!", data: newFood });
  } catch (error) {
    res.status(500).json({ message: "Something wrong", data: error });
  }
};

export const getFood = async (req, res) => {
  try {
    const result = await Food.find().populate("category", "name");
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json("Error", error);
  }
};

export const updateFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const result = await Food.findByIdAndUpdate(foodId, req.body);
    res.status(200).json({ message: "Successful", result });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const result = await Food.findByIdAndDelete(foodId, req.body);
    res.status(200).json({ message: "Successful", result });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};
