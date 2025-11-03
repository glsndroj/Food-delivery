import bcrypt from "bcrypt"
import { User } from "../models/userSchema.js";


export const SignUp = async(req, res) => {
    const {email, password} = req.body;
    try {
        const isRegistered = await User.findOne({email})

        if(!isRegistered){
           const hashedPassword = await bcrypt.hash(password, 10)
        console.log("Real Password", password)
        console.log("Hash Password", hashedPassword) 

        const user = await User.create({
            email,
            password: hashedPassword,
        })
        res.status(200).send({message: "User successfully created!", data: user})
        }else{
            res.status(401).send("This email already registered!")
        }

    } catch (error) {
        console.log("error", error)
        res.status(500).send({message: "Error", error})
        
    }
}


export const Login = async (req, res) => {

   try {
    const {email, password} = req.body;

    const isRegistered = await User.findOne({email})
    console.log("User", isRegistered.password, password)
    const isCorrectPass = await bcrypt.compare(password, isRegistered.password)
    console.log("test",isCorrectPass);
    
    if(isCorrectPass){
        res.status(200).send("Login successful!")
    }else {
        res.status(401).send("Password is wrong")
    }
   } catch (error) {
    res.status(500).send("Error", error)
   }
}



export const getUsers = async(req,res) => {
    try {
        const result = await User.find()
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send("Error", error)
    }
}

export const updateUser = async (req, res) => {

    try {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, req.body)
        res.status(200).send(user, "User updated")
        
    } catch (error) {
        res.status(401).send("Error", error)
        
    }
}

export const deleteUser = async (req, res) => {

    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId)
        res.status(200).send(user, "User deleted")
        
    } catch (error) {
        res.status(401).send("Error", error)
        
    }
}