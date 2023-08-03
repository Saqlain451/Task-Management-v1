import TaskHeader from "./TaskHeader.jsx";

const Tasks = () => {
  return (
    <>
      <div className="task-management">
        <div className="tasks">
          <div className="all-task">
            <TaskHeader />
          </div>
        </div>
        <div className="task-gaph"></div>
      </div>
    </>
  );
};

export default Tasks;
