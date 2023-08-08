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
    const data = await Tasks.find({ mail }).countDocuments();
    const taskData = await Tasks.find({ mail, status: "Not Started" });
    const pending = await Tasks.find({
      mail,
      status: "Working",
    });
    const completed = await Tasks.find({
      mail,
      status: "Completed",
    });
    taskData.length
      ? res.status(201).json({
          success: taskData,
          all: data,
          pending: pending.length,
          completed: completed.length,
        })
      : res.status(401).json({ err: "Don't have any data" });
  } catch (error) {
    console.error(error);
  }
};

const getPendingTask = async (req, res) => {
  const { mail, status } = req.params;
  try {
    const all = await Tasks.find({ mail });
    const pending = await Tasks.find({
      mail,
      status: "Working",
    });
    const completed = await Tasks.find({
      mail,
      status: "Completed",
    });
    const data = await Tasks.find({ mail, status }).sort({ createdAt: -1 });
    data.length
      ? res.status(201).json({
          success: data,
          pending: pending.length,
          all: all.length,
          completed: completed.length,
        })
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

//  deleted if completed --------------->

const delTask = async (req, res) => {
  const { id } = req.params;
  try {
    const existId = await Tasks.findOne({ _id: id });
    if (existId) {
      await Tasks.deleteOne({ _id: id });
      res.status(201).json({ msg: "Deleted" });
    }
  } catch (error) {
    res.status(501).json({ err: "Internal server error" });
    console.error(error);
  }
};

export {
  createTask,
  getAllTask,
  getPendingTask,
  updateStatus,
  completedTask,
  delTask,
};
