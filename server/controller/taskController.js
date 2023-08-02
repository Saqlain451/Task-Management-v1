import Tasks from "../model/TaskModel.js";

const createTask = async (req, res) => {
  try {
    const { mail, taskTitle, taskDes, status, startTime } = req.body;

    if (!mail || !taskTitle || !taskDes || !status || !startTime) {
      return res.status(401).json({
        err: "All fields should be filled",
      });
    }

    const isExist = await Tasks.findOne({ mail, taskTitle, startTime });
    if (isExist) {
      return res.status(401).json({ err: "Sorry! The task is already added" });
    }

    const newTaskData = new Tasks({
      mail,
      taskTitle,
      taskDes,
      status,
      startTime,
    });
    await newTaskData.save();

    res.status(201).json({ msg: "Task is Added", task: newTaskData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const getAllTask = async (req, res) => {
  const { mail } = req.params;
  try {
    const taskData = await Tasks.find({ mail });
    taskData.length
      ? res.status(201).json({ success: taskData })
      : res.status(401).json({ err: "Don't have any data" });
  } catch (error) {
    console.error(error);
  }
};



export { createTask, getAllTask };
