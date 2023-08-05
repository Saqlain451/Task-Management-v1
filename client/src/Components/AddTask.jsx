import { useGlobalHook } from "../Hooks/Context.jsx";

const AddTask = () => {
  const { setIsShowModel, addData, changeChandle, submitHandler, isLoading } =
    useGlobalHook();

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
