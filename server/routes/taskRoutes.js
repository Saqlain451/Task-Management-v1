import express from "express";
import {
  completedTask,
  createTask,
  getAllTask,
  getPendingTask,
  updateStatus,
} from "../controller/taskController.js";

const taskRouter = new express.Router();

taskRouter.post("/addTask", createTask);

taskRouter.get("/getTask/:mail", getAllTask);

taskRouter.get("/getTask/:mail/:status", getPendingTask);

taskRouter.patch("/updateTask/working", updateStatus);

taskRouter.patch("/updateTask/completed", completedTask);
export default taskRouter;
