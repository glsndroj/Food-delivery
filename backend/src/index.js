import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { ConnectDB } from "./Database/db.js";
import { userRouter } from "./routes/userRoute.js";
import { FoodCategoryRouter } from "./routes/categoryRoute.js";
import { FoodRouter } from "./routes/foodRoute.js";
import { authRouter } from "./routes/authRoute.js";
import cors from "cors"


configDotenv();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use("/user", userRouter);
app.use("/foodcategory", FoodCategoryRouter);
app.use("/foods", FoodRouter);
app.use('/user', authRouter)

console.log("Server live!");

app.listen(port, () => {
  ConnectDB();
  console.log(`server is running ${process.env.PORT}`)
});
