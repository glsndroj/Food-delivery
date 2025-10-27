import { foodCategory } from "../models/foodCatergory.js";

export const CreateFoodCategory = async (req, res) => {
    try {
        const {body} = req;
        res.status(200).send({message: "Successful", data: body})
    } catch (error) {
        res.status(500).send({message: "Error", data: null})
    }
}