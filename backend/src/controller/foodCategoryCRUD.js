import { foodCategory } from "../models/foodCatergorySchema.js";

export const CreateFoodCategory = async (req, res) => {
    console.log(req.body)
    
    try {
        await foodCategory.create({
            categoryName: req.body.categoryName
        })
        res.status(200).send({message: "Successful", data: req.body})
    } catch (error) {
        console.log(error,'err')
        res.status(500).send({message: "Error", data: null})
    }
}

export const getFoodCategory = async (req, res) => {
    try {
        const result = await foodCategory.find();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send("Error", error)
    }
}

export const updateFoodCatergory = async (req, res) => {
    
    try {
        const categoryId = req.params.id;
        const result = await foodCategory.findByIdAndUpdate(categoryId, req.body);
        res.status(200).send({message: "Successful", result})
    } catch (error) {
        res.status(500).send({message: "Error", error})
    }
}

export const deleteFoodCategory = async ( req, res) => {
    try {
        const categoryId = req.params.id;
        const result = await foodCategory.findByIdAndDelete(categoryId, req.body);
        res.status(200).send({message: "Successful", result})

    } catch (error) {
        res.status(500).send({message: "Error", error})
    }
}