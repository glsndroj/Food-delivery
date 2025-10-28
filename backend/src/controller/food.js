import { food } from "../models/food.js";

export const CreateFood = async (req, res) => {
    console.log(req.body)
    
    try {
        await food.create({
            foodName: req.body.foodName
        })
        res.status(200).send({message: "Successful", data: req.body})
    } catch (error) {
        console.log(error,'err')
        res.status(500).send({message: "Error", data: null})
    }
}

export const getFood = async (req, res) => {
    try {
        const result = await food.find();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send("Error", error)
    }
}

export const updateFood = async (req, res) => {
    
    try {
        const foodId = req.params.id;
        const result = await food.findByIdAndUpdate(foodId, req.body);
        res.status(200).send({message: "Successful", result})
    } catch (error) {
        res.status(500).send({message: "Error", error})
    }
}

export const deleteFood = async ( req, res) => {
    try {
        const foodId = req.params.id;
        const result = await food.findByIdAndDelete(foodId, req.body);
        res.status(200).send({message: "Successful", result})

    } catch (error) {
        res.status(500).send({message: "Error", error})
    }
}