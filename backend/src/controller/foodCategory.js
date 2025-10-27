import { foodCategory } from "../models/foodCatergory.js";

export const CreateFoodCategory = async (req, res) => {
    const {body} = req;
    try {
        await foodCategory.create({
            categoryName: body.categoryName
        })
        res.status(200).send({message: "Successful", data: body})
    } catch (error) {
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