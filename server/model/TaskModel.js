
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  mail: { type: String, required: true },
  taskTitle: { type: String, required: true },
  taskDes: { type: String, required: true },
  status: { type: String, default : "Not Started" },
  startTime: { type: Date, required: true },
});

const Tasks = mongoose.model("Task", taskSchema);

export  default Tasks;
