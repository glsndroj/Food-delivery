
import { User } from "../models/userSchema.js";


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


