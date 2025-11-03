import { Router } from "express";
import { deleteUser, getUsers, Login, SignUp, updateUser } from "../controller/userCRUD.js";

export const userRouter = Router();

userRouter
.post('/signup', SignUp)
.get('/', getUsers)
.post('/login', Login)
.patch('/:id', updateUser)
.delete('/:id', deleteUser)
