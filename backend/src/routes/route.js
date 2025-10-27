import { Router } from "express";
import { CreateFoodCategory, getFoodCategory } from "../controller/foodCategory.js";

export const FoodCategoryRouter = Router();

FoodCategoryRouter.post('/', CreateFoodCategory).get('/', getFoodCategory )