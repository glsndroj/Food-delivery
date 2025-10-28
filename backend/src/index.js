import express from "express"
import bodyParser from "body-parser"
import {configDotenv} from "dotenv"
import { ConnectDB } from "./Database/db.js";
import { FoodCategoryRouter } from "./routes/route.js";

configDotenv();

const app = express();

const port = process.env.PORT

app.use(bodyParser.json());

app.use('/FoodCategory', FoodCategoryRouter)

console.log("Server live!")

app.listen(port,() => {
    ConnectDB();
})