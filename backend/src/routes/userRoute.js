import { Router } from "express";
import { getUsers, Login, SignUp } from "../controller/userCRUD.js";

export const userRouter = Router();

userRouter
.post('/signup', SignUp)
.get('/', getUsers)
.post('/login', Login)
