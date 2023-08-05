import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";

// eslint-disable-next-line no-unused-vars
import {useState} from "react";
import {useGlobalHook} from "../Hooks/Context.jsx";

// eslint-disable-next-line react/prop-types
const TaskHeader = ({btnClick}) => {

  const { navBtnClick} = useGlobalHook();

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
          <li className={"pointer text-blue-gray fw-5"} onClick={navBtnClick}>Active</li>
          <li className={"pointer text-blue-gray fw-5"} onClick={navBtnClick}>Pending</li>
          <li className={"pointer text-blue-gray fw-5"} onClick={navBtnClick}>Completed</li>
        </ul>
        <div className="btn-add d-flex center pointer" onClick={btnClick}>
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
