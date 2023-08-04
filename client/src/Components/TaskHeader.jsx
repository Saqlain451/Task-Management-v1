import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";

import {useState} from "react";

// eslint-disable-next-line react/prop-types
const TaskHeader = ({btnClick}) => {


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
