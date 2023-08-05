import Tasks from "../model/TaskModel.js";

const createTask = async (req, res) => {
  try {
    const { mail, taskTitle, taskDes, startTime } = req.body;

    if (!mail || !taskTitle || !taskDes || !startTime) {
      return res.status(401).json({
        err: "All fields should be filled",
      });
    }

    const isExist = await Tasks.findOne({ mail, taskTitle, startTime });
    if (isExist) {
      return res.status(401).json({ err: "Sorry! The task is already added" });
    }

    const newTaskData = new Tasks({
      ...req.body,
    });
    await newTaskData.save();

    res.status(201).json({ msg: "Task is Added" });
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

const getPendingTask = async (req, res) => {
  const { mail, status } = req.params;
  try {
    const data = await Tasks.find({ mail, status });
    data.length
      ? res.status(201).json({ success: data })
      : res.status(401).json({ err: "Don't have any data" });
  } catch (error) {
    res.status(501).json({ err: "Internal server Error" });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.body;
  try {
    const existTask = await Tasks.findOne({ _id: id });
    if (existTask) {
      await Tasks.updateOne({ _id: id }, { $set: { status: "Working" } });
      res.status(201).json({ msg: "Start working" });
    }
  } catch (error) {
    res.status(501).json({ err: "Internal server error" });
    console.error(error);
  }
};

const completedTask = async (req, res) => {
  const { id } = req.body;
  try {
    const existTask = await Tasks.findOne({ _id: id });
    if (existTask) {
      await Tasks.updateOne({ _id: id }, { $set: { status: "Completed" } });
      res.status(201).json({ msg: "Start working" });
    }
  } catch (error) {
    res.status(501).json({ err: "Internal server error" });
    console.error(error);
  }
};
export { createTask, getAllTask, getPendingTask, updateStatus, completedTask };
