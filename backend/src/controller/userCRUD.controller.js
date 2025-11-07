import bcrypt from "bcrypt";
import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send("Error", error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Error", error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, req.body);
    res.status(200).send({ message: "User updated", user });
  } catch (error) {
    res.status(401).send("Error", error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).send({ message: "User deleted", user });
  } catch (error) {
    res.status(401).send("Error", error);
  }
};

export const SignUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(401).send({ message: "User registered!" });

    const newUser = await User.create({ email, password: hashedPassword });
    res
      .status(200)
      .send({
        message: "User created successfully, Please log in",
        user: { id: newUser._id, email: newUser.email },
      });

    const hashedPassword = await bcrypt.hash(password, 10);
  } catch (error) {
    console.error("Signup error", error);
    req.status(500).send({ message: "Server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isRegistered = await User.findOne({ email });
    if (!isRegistered) {
      return res.status(400).send({ message: "Invalid email or password!" });
    }
    console.log("User", isRegistered.password, password);

    const isCorrectPass = await bcrypt.compare(password, isRegistered.password);
    console.log("test", isCorrectPass);

    const token = jwt.sign(isRegistered.toObject(), process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (isCorrectPass) {
      res.status(200).send("Login successful!");
    } else {
      res.status(401).send("Password is wrong");
    }
  } catch (error) {
    res.status(500).send("Error", error);
  }
};
