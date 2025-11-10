import {Router } from "express";
import { Login, SignUp } from "../controller/auth.controller.js";


export const authRouter = Router();

authRouter.post("/signup", SignUp )
.post("/login", Login );

