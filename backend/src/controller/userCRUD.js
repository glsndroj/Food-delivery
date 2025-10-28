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
    const {email, password} = req.body;

    const user = await User.findOne({email})

    console.log("User", user)

    if(!user.lenght) {

    }
    console.log("Body DATA", email, password)

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        res.status(403).send({message: "Password incorrect"})
    }
    res.status(200).send({message: "Success", data: user})
}