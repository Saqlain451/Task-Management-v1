import { useGlobalHook } from "../Hooks/Context.jsx";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const AddTask = () => {
  const { setIsShowModel, api } = useGlobalHook();
  const [addData, setAddData] = useState({
    taskTitle: "",
    taskDes: "",
    startTime: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const changeChandle = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };

  const submitHandler = async () => {
    setIsLoading(true);
    const user = Cookies.get("user");
    const userDet = JSON.parse(user);
    const { mail } = userDet;
    const newData = { ...addData, mail };
    try {
      const response = await axios.post(`${api}/addTask`, { ...newData });
      if (response.status === 201) {
        toast.success(response.data.msg, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
        setIsLoading(false);
      }
      setIsShowModel(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.err, {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
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
          {isLoading ? <span className={"btn-loader"}></span> : "Add Task"}
        </button>
      </div>
    </>
  );
};

export default AddTask;
