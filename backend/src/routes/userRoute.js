import { Router } from "express";
import { Login, SignUp } from "../controller/userCRUD.js";

export const userRouter = Router();

userRouter
.post('/signup', SignUp)

.post('/login', Login)
