import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form-wrapper">
        <form className={"grid-2 grid-sm-1 br-0-5 g-1"}>
          <div className="form-content p-2">
            <h1 className={"fs-4 text-blue text-center"}>Log In</h1>
            <label htmlFor="mail">Email Id</label>
            <div className="input-filed">
              <span className={"d-flex center text-blue fs-1-5"}>
                <FaUser />
              </span>
              <input type="email" name="mail" className={"form-control"} />
            </div>
            <label htmlFor="pass">Password</label>
            <div className="input-filed">
              <span className={"d-flex center text-blue fs-1-5"}>
                <RiLockPasswordFill />
              </span>
              <input type="password" name="pass" className={"form-control"} />
            </div>
            <div className="d-flex space-between mt-3 g-2">
              <button className={"btn-lg btn-blue"}>Log In</button>
              <button className={"btn-lg btn-blue"}>
                <NavLink to={"/register"} className={"text-white"}>
                  Sign Up
                </NavLink>
              </button>
            </div>
          </div>
          <div className="form-img">
            <img
              src="/assets/login.png"
              alt="login image"
              className={"img-fluid"}
              width={577}
              height={433}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
