import TaskHeader from "./TaskHeader.jsx";
import { useGlobalHook } from "../Hooks/Context.jsx";
import AddTask from "./AddTask.jsx";

const Tasks = () => {
  const { isShowModal, setIsShowModel } = useGlobalHook();
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
          </div>
        </div>
        <div className="task-gaph"></div>
      </div>


    </>
  );
};

export default Tasks;
