import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        className="nav-bar d-flex space-between pl-5 pr-5 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2"
        style={{ height: "8rem", background: "whitesmoke" }}
      >
        <NavLink to={"/"} className={"text-blue"}>
          <h1>Task Management</h1>
        </NavLink>
        <div className="bar-icon fs-2 text-blue pointer">
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Navbar;
