import { Category } from "../models/categorySchema.js";

export const CreateFoodCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if(!name || typeof name !== "string" || !name.trim()){
      return res.status(400).send({message: "Category name is required"})
    }

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
  const {body} = req;
  try {
    const result = await Category.aggregate([
      {
        $lookup:
          /**
           * from: The target collection.
           * localField: The local join field.
           * foreignField: The target join field.
           * as: The name for the results.
           * pipeline: Optional pipeline to run on the foreign collection.
           * let: Optional variables to use in the pipeline field stages.
           */
          {
            from: "foods",
            localField: "_id",
            foreignField: "category",
            as: "foods",
          },
      },
  
    ])
    
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
