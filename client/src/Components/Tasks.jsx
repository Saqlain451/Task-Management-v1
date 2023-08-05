import TaskHeader from "./TaskHeader.jsx";
import { useGlobalHook } from "../Hooks/Context.jsx";
import { useEffect } from "react";
import Card from "./Card.jsx";
import Cookies from "js-cookie";
import axios from "axios";

const Tasks = () => {
  const { setIsShowModel, getAllData, allTaskData, isBtnActive, api } =
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
    console.log(id)
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
              <div className={"grid-3 grid-md-2 grid-sm-1 g-2 p-4"}>
                {allTaskData.map((data) => {
                  const { _id } = data;
                  return (
                    <Card
                      {...data}
                      key={_id}
                      startWork={startWoking}
                      id={_id}
                      btnName={"Start"}
                      cardColor={"#f7f8fa"}
                    />
                  );
                })}
              </div>
            )}

            {isBtnActive.Pending && (
              <div className={"grid-3 grid-md-2 grid-sm-1 g-2 p-4"}>
                {allTaskData.map((data) => {
                  const { _id } = data;
                  return (
                    <Card
                      {...data}
                      key={_id}
                      startWork={completedTask}
                      id={_id}
                      btnName={"Completed"}
                    />
                  );
                })}
              </div>
            )}

            {isBtnActive.Completed && (
              <div className={"grid-3 grid-md-2 grid-sm-1 g-2 p-4"}>
                {allTaskData.map((data) => {
                  const { _id } = data;
                  return (
                    <Card
                      {...data}
                      key={_id}
                      startWork={delTask}
                      id={_id}
                      btnName={"Delete"}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="task-gaph"></div>
      </div>
    </>
  );
};

export default Tasks;
