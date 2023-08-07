import TaskHeader from "./TaskHeader.jsx";
import { useGlobalHook } from "../Hooks/Context.jsx";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import picsAvater from "../Hooks/Data.jsx";
import TaskGraphs from "./Graph.jsx";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.jsx";

const Tasks = () => {
  const {
    getAllData,
    allTaskData,
    isBtnActive,
    api,
    count,
    isLoadingData,
    isError,
  } = useGlobalHook();
  const navigate = useNavigate();

  const [work, setWork] = useState({
    start: "",
    completed: "",
    del: "",
  });
  const startWoking = async ({ id }) => {
    try {
      const response = await axios.patch(`${api}/updateTask/working`, { id });
      console.log(response);
      setWork({ start: response.data.msg });
    } catch (error) {
      console.error(error);
    }
  };

  const completedTask = async ({ id }) => {
    try {
      const response = await axios.patch(`${api}/updateTask/completed`, { id });
      console.log(response);
      setWork({ completed: response.data.msg });
    } catch (error) {
      console.error(error);
    }
  };

  const delTask = async ({ id }) => {
    try {
      const response = await axios.delete(`${api}/deleteTask/${id}`);
      console.log(response);
      setWork({ del: response.data.msg });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (Cookies.get("user")) {
      const user = Cookies.get("user");
      const userDet = JSON.parse(user);
      const { mail } = userDet;
      getAllData(`${api}/getTask/${mail}`);
    }
  }, [work]);

  return (
    <>
      <div className="task-management">
        <div className="tasks">
          <div className="all-task">
            <TaskHeader
              btnClick={() => {
                navigate("/add-task");
              }}
            />
            <div className="tasks-inner d-flex center">
              {isBtnActive.Tasks &&
                (isLoadingData ? (
                  <div className={"d-flex center"} style={{ height: "70vh" }}>
                    <Loader />
                  </div>
                ) : isError ? (
                  <p
                    className={"d-flex center fs-1-5"}
                    style={{ height: "70vh" }}
                  >
                    No Task added please add task
                  </p>
                ) : (
                  <div
                    className={
                      "grid-3 grid-md-2 grid-lg-2 grid-sm-1 g-2 p-4 p-md-2"
                    }
                  >
                    {allTaskData.map((data) => {
                      const { _id } = data;
                      const num = Math.floor(Math.random() * picsAvater.length);
                      return (
                        <Card
                          {...data}
                          key={_id}
                          startWork={startWoking}
                          id={_id}
                          btnName={"Start"}
                          cardColor={"#f7f8fa"}
                          imgsrc={picsAvater[num]}
                        />
                      );
                    })}
                  </div>
                ))}
            </div>
            {isBtnActive.Pending &&
              (isLoadingData ? (
                <div className={"d-flex center"} style={{ height: "70vh" }}>
                  <Loader />
                </div>
              ) : isError ? (
                <p
                  className={"d-flex center fs-1-5"}
                  style={{ height: "70vh" }}
                >
                  No Pending Task Found
                </p>
              ) : (
                <div
                  className={
                    "grid-3 grid-md-2 grid-lg-2 grid-sm-1 g-2 p-4 p-md-2"
                  }
                >
                  {allTaskData.map((data) => {
                    const num = Math.floor(Math.random() * picsAvater.length);
                    const { _id } = data;
                    return (
                      <Card
                        {...data}
                        key={_id}
                        startWork={completedTask}
                        id={_id}
                        btnName={"Completed"}
                        cardColor={"rgba(255,160,122,0.25)"}
                        imgsrc={picsAvater[num]}
                      />
                    );
                  })}
                </div>
              ))}

            {isBtnActive.Completed &&
              (isLoadingData ? (
                <div className={"d-flex center"} style={{ height: "70vh" }}>
                  <Loader />
                </div>
              ) : isError ? (
                <p
                  className={"d-flex center fs-1-5"}
                  style={{ height: "70vh" }}
                >
                  You did not complete any task
                </p>
              ) : (
                <div
                  className={
                    "grid-3 grid-md-2 grid-lg-2 grid-sm-1 g-2 p-4 p-md-2"
                  }
                >
                  {allTaskData.map((data) => {
                    const { _id } = data;
                    const num = Math.floor(Math.random() * picsAvater.length);
                    return (
                      <Card
                        {...data}
                        key={_id}
                        startWork={delTask}
                        id={_id}
                        btnName={"Delete"}
                        imgsrc={picsAvater[num]}
                        cardColor={"#C8FAC8FF"}
                      />
                    );
                  })}
                </div>
              ))}
          </div>
        </div>
        <div
          className="task-gaph p-2"
          style={{ borderLeft: " 2px solid #edeff2" }}
        >
          <TaskGraphs
            completedWork={count.completed}
            pendingWork={count.pending}
            totalWork={count.active}
          />
        </div>
      </div>
    </>
  );
};

export default Tasks;
