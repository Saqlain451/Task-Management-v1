import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";

const TaskHeader = () => {
  return (
    <>
      <div
        className="d-flex space-between pl-3 pr-3 pl-sm-1 pr-sm-1"
        style={{ height: "6rem", borderBottom: "2px solid #EDEFF2" }}
      >
        <p className={"fs-1-5 text-blue-gray"}>
          <BsFillHandbagFill />
        </p>
        <ul className={"d-flex center g-3"}>
          <li className={"pointer text-blue-gray fw-5"}>Active</li>
          <li className={"pointer text-blue-gray fw-5"}>Pending</li>
          <li className={"pointer text-blue-gray fw-5"}>Completed</li>
        </ul>
        <div className="btn-add d-flex center pointer">
          <span className={"fs-1-5 text-gray"}>
            <IoIosAddCircle />
          </span>
          Add Tasks
        </div>
      </div>
    </>
  );
};

export default TaskHeader;
