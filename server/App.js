import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoDbConnect from "./db/Connect.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
//  Use all the routers --------->
app.use(userRouter);

const port = process.env.PORT;
const url = process.env.MONGO_URI;


mongoDbConnect(url);
app.listen(port, () => {
    console.log("app is running")
})