import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/userSchema.js";

export const SignUp = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(409).send({ message: "User registered!" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, password: hashedPassword });
      console.log("Registered user: ", newUser);
      res.status(200).send({
        message: "User created successfully, Please log in",
        user: { id: newUser._id, email: newUser.email },
      });
    } catch (error) {
      console.error("Signup error", error);
      res.status(500).send({ message: "Server error" });
    }
  };
  
  export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const isRegistered = await User.findOne({ email });
      if (!isRegistered) {
        console.log("User not found");
        return res.status(400).send({ message: "Invalid email or password!" });
      }
      console.log("Use found: ", isRegistered.email);
      console.log("Saved password hash: ", isRegistered.password);
  
      const isCorrectPass = await bcrypt.compare(password, isRegistered.password);
      console.log("Password match: ", isCorrectPass);
      if (!isCorrectPass) {
        return res.status(400).json({ message: "Invalid email or password!" });
      }
      if (!process.env.JWT_SECRET) {
      }
  
      const token = jwt.sign(isRegistered.toObject(), process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).send({
        message: "Login successful",
        token,
        user: { id: isRegistered._id, email: isRegistered.email },
      });
    } catch (error) {
      console.error("Login error", error);
      res.status(500).send({ message: "Server error", error: error.message });
    }
  };