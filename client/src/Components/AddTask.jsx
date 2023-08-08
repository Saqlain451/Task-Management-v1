import { useGlobalHook } from "../Hooks/Context.jsx";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const AddTask = () => {
  const { api } = useGlobalHook();
  const navigate = useNavigate();
  const [addData, setAddData] = useState({
    taskTitle: "",
    taskDes: "",
    startTime: "",
  });

  const changeChandle = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };
  const [isLoading, setIsLoading] = useState(false);
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
        navigate("/");
      }
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
      <Navbar />
      <div className="d-flex center" style={{ width: "100%", height: "100vh" }}>
        <div className="modal-box">
          <label htmlFor="taskTitle">Title</label>
          <input
            type="text"
            name="taskTitle"
            className={"form-control mt-1 pl-1 pr-1"}
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
            className={"form-control mt-1 mb-2 pl-1 pr-1"}
            style={{ border: "2px solid #EDEFF2" }}
            value={addData.startTime}
            onChange={changeChandle}
          />

          <button
            className={"btn-add pointer mx-auto fs-1 d-flex center"}
            onClick={submitHandler}
          >
            {isLoading ? (
              <span
                className={"btn-loader"}
                style={{ width: "2rem", height: "2rem" }}
              ></span>
            ) : (
              "Add Task"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
