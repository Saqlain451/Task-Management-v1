import TaskHeader from "./TaskHeader.jsx";
import { useGlobalHook } from "../Hooks/Context.jsx";
import { useEffect } from "react";
import Card from "./Card.jsx";
import Cookies from "js-cookie";

const Tasks = () => {
  const { setIsShowModel, getAllData, allTaskData, isBtnActive, api } =
    useGlobalHook();

  const startWoking = ({ id }) => {
    console.log(id);
  };
  useEffect(() => {
    const user = Cookies.get("user");
    const userDet = JSON.parse(user);
    const { mail } = userDet;
    getAllData(`${api}/getTask/${mail}`);
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
                      startWork={startWoking}
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
                      startWork={startWoking}
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
