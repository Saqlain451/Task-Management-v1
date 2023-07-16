import {createUser,loginUser} from "../controller/userController.js";
import {Router} from "express";

const userRouter = Router();
userRouter.post("/createUser", createUser);
userRouter.post("/loginUser",loginUser);
export default userRouter;