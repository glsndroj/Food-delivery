import { Category } from "../models/foodCategorySchema.js";

export const CreateFoodCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const existingCategory = await Category.findOne({ name: name.trim() });
    if (existingCategory) {
      return res
        .status(409)
        .send({ message: "Category already created!", data: existingCategory });
    }

    const newCategory = await Category.create({
      name: name.trim(),
    });

    res
      .status(200)
      .send({ message: "Category created successfully!", data: newCategory });
  } catch (error) {
    console.error("Create category error: ", error);
    res.status(500).send({ message: "Error", error: error.message });
  }
};

export const getFoodCategory = async (req, res) => {
  try {
    const result = await Category.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Error", error);
  }
};

export const updateFoodCatergory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const result = await Category.findByIdAndUpdate(categoryId, req.body);
    res.status(200).send({ message: "Successful", result });
  } catch (error) {
    res.status(500).send({ message: "Error", error });
  }
};

export const deleteFoodCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const result = await Category.findByIdAndDelete(categoryId, req.body);
    res.status(200).send({ message: "Successful", result });
  } catch (error) {
    res.status(500).send({ message: "Error", error });
  }
};
