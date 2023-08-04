import { useGlobalHook } from "../Hooks/Context.jsx";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AddTask = () => {
  const { setIsShowModel,api } = useGlobalHook();
  const [addData, setAddData] = useState({
    taskTitle: "",
    taskDes: "",
    startTime: "",
  });
  const changeChandle = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };

  const submitHandler = async () => {
    const user = Cookies.get("user");
    const userDet = JSON.parse(user);
    const { mail } = userDet;
    const newData = { ...addData, mail };
    console.log(newData);
    try {
      const response = await axios.post(`${api}/addTask`,{...newData});
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
        className="modal-wrapper"
        onClick={() => {
          setIsShowModel(false);
        }}
      ></div>
      <div className="modal-box">
        <label htmlFor="taskTitle">Title</label>
        <input
          type="text"
          name="taskTitle"
          className={"form-control mt-1"}
          style={{ border: "2px solid #EDEFF2" }}
          value={addData.taskTitle}
          onChange={changeChandle}
        />
        <label htmlFor="taskDes">Description</label>
        <textarea
          name="taskDes"
          className={" form-control textarea mt-1"}
          style={{ border: "2px solid #EDEFF2" }}
          value={addData.taskDes}
          onChange={changeChandle}
        ></textarea>
        <label htmlFor="Starttime">Start time of Task</label>
        <input
          type="datetime-local"
          name={"startTime"}
          className={"form-control mt-1 mb-2"}
          style={{ border: "2px solid #EDEFF2" }}
          value={addData.startTime}
          onChange={changeChandle}
        />

        <button
          className={"btn-add pointer mx-auto fs-1"}
          onClick={submitHandler}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
