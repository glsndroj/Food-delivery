import { Category } from "../models/foodCategorySchema.js";

export const CreateFoodCategory = async (req, res) => {
  console.log(req.body);

  try {
    await Category.create({
      name: req.body.name,
    });

    res.status(200).send({ message: "Successful", data: req.body });
  } catch (error) {
    console.log(error, "err");
    res.status(500).send({ message: "Error", data: null });
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
