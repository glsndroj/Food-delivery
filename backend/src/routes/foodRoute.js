import { Router } from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controller/food.controller.js";

export const FoodRouter = Router();

FoodRouter.post("/", createFood)
  .get("/", getFood)
  .patch("/:id", updateFood)
  .delete("/:id", deleteFood);
