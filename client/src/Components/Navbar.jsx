import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        className="nav-bar d-flex space-between pl-5 pr-5 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2"
        style={{
          height: "8rem", borderBottom: "2px solid #EDEFF2",
        }}
      >
        <NavLink to={"/"}>
          <h1 style={{ color: "#4D5E80" }}>Task Management</h1>
        </NavLink>
        <div className="bar-icon  text-gray pointer d-flex center fs-1-5">
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Navbar;
