import express from "express"
import bodyParser from "body-parser"
import {configDotenv} from "dotenv"

configDotenv();

const app = express();

const port = process.env.PORT

app.use(bodyParser.json());

console.log("Server live!")

app.listen(port,() => {
    console.log("Connected successfully!")
})