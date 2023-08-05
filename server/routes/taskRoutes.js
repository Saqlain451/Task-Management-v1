import express from "express";
import {
  createTask,
  getAllTask,
  getPendingTask,
} from "../controller/taskController.js";

const taskRouter = new express.Router();

taskRouter.post("/addTask", createTask);

taskRouter.get("/getTask/:mail", getAllTask);

taskRouter.get("/getTask/:mail/:status", getPendingTask);
export default taskRouter;
