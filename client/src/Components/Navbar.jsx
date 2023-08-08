import { NavLink, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const [letter, setLetter] = useState("");
  const [isLogoutPopupShow, setIsLogoutPopupShow] = useState(false);
  const navigate = useNavigate();
  if (!Cookies.get("user")) {
    navigate("/login");
  }

  const logout = () => {
    Cookies.remove("user");
    if (!Cookies.get("user")) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (Cookies.get("user")) {
      const user = Cookies.get("user");
      const userDetails = JSON.parse(user);
      const name = userDetails.name;
      setLetter(name.split("")[0]);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <div
        className="nav-bar d-flex space-between pl-5 pr-5 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2"
        style={{
          height: "8rem",
          borderBottom: "2px solid #EDEFF2",
          position: "sticky",
          top: 0,
          left: 0,
          background: "#f7f8fa",
        }}
      >
        <NavLink to={"/"}>
          <h1 style={{ color: "#4D5E80" }}>Task Management</h1>
        </NavLink>
        <div className={{ position: "relative" }}>
          <div
            className="bar-icon  text-gray pointer d-flex center fs-2 fw-7"
            onClick={() => {
              setIsLogoutPopupShow(!isLogoutPopupShow);
            }}
          >
            {letter}
          </div>
          {isLogoutPopupShow ? (
            <div className="log-out d-flex center p-1">
              <p
                className={"d-flex g-0-5 text-blue fs-2 pointer"}
                onClick={logout}
              >
                <TbLogout2 />{" "}
                <span className={"text-blue-gray fs-1-5 fw-6"}>Log Out</span>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
