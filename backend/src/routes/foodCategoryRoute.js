import { Router } from "express";
import { CreateFoodCategory, deleteFoodCategory, getFoodCategory, updateFoodCatergory } from "../controller/foodcategory.controller.js";

export const FoodCategoryRouter = Router();

FoodCategoryRouter
.post('/', CreateFoodCategory)
.get('/', getFoodCategory)
.patch('/:id', updateFoodCatergory)
.delete('/:id', deleteFoodCategory)