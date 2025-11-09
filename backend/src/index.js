import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { ConnectDB } from "./Database/db.js";
import { userRouter } from "./routes/userRoute.js";
import { FoodCategoryRouter } from "./routes/foodCategoryRoute.js";
import { FoodRouter } from "./routes/foodRoute.js";

configDotenv();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());

app.use("/user", userRouter);
app.use("/foodcategory", FoodCategoryRouter);
app.use("/foods", FoodRouter);

console.log("Server live!");

app.listen(port, () => {
  ConnectDB();
});
