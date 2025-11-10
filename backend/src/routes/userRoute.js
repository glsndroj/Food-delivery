import { Router } from "express";
import { deleteUser, getUsers, updateUser } from "../controller/user.controller.js";

export const userRouter = Router();

userRouter
.get('/', getUsers)
.patch('/:id', updateUser)
.delete('/:id', deleteUser)
