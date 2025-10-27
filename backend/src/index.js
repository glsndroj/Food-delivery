import express from "express"
import bodyParser from "body-parser"
import {configDotenv} from "dotenv"
import { ConnectDB } from "./Database/db.js";

configDotenv();

const app = express();

const port = process.env.PORT

app.use(bodyParser.json());

console.log("Server live!")

app.listen(port,() => {
    ConnectDB();
    
})