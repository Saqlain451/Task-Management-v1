import express from "express";
import {createTask, getAllTask} from "../controller/taskController.js";

const taskRouter = new express.Router();

taskRouter.post("/addTask", createTask);

taskRouter.get("/getTask/:mail",getAllTask);
export default taskRouter;
