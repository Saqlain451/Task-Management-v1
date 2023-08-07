import TaskHeader from "./TaskHeader.jsx";
import { useGlobalHook } from "../Hooks/Context.jsx";
// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import Card from "./Card.jsx";
import Cookies from "js-cookie";
import axios from "axios";
import picsAvater from "../Hooks/Data.jsx";
import TaskGraphs from "./Graph.jsx";

const Tasks = () => {
  const { setIsShowModel, getAllData, allTaskData, isBtnActive, api, count } =
    useGlobalHook();

  const startWoking = async ({ id }) => {
    console.log(id);
    try {
      const response = await axios.patch(`${api}/updateTask/working`, { id });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const completedTask = async ({ id }) => {
    try {
      const response = await axios.patch(`${api}/updateTask/completed`, { id });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const delTask = async ({ id }) => {
    try {
      const response = await axios.delete(`${api}/deleteTask/${id}`);
      console.log(response);
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
  }, []);

  return (
    <>
      <div className="task-management">
        <div className="tasks">
          <div className="all-task">
            <TaskHeader
              btnClick={() => {
                setIsShowModel(true);
              }}
            />
            {isBtnActive.Active && (
              <div className={"grid-3 grid-md-2 grid-lg-2 grid-sm-1 g-2 p-4 p-md-2"}>
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
            )}

            {isBtnActive.Pending && (
              <div className={"grid-3 grid-md-2 grid-lg-2 grid-sm-1 g-2 p-4 p-md-2"}>
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
            )}

            {isBtnActive.Completed && (
              <div className={"grid-3 grid-md-2 grid-lg-2 grid-sm-1 g-2 p-4 p-md-2"}>
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
            )}
          </div>
        </div>
        <div className="task-gaph p-2">
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
