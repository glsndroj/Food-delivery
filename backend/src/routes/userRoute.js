import { Router } from "express";
import { deleteUser, getUsers, Login, SignUp, updateUser } from "../controller/userCRUD.controller.js";

export const userRouter = Router();

userRouter
.post('/signup', SignUp)
.get('/', getUsers)
.post('/login', Login)
.patch('/:id', updateUser)
.delete('/:id', deleteUser)
