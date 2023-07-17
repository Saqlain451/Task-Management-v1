import { FaUser } from "react-icons/fa";
import { MdLockPerson, MdOutlineVpnLock } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="form-wrapper">
        <form className={"grid-2 grid-sm-1 br-0-5"}>
          <div className="form-img">
            <img
              src="/assets/register.png"
              alt="retgister img"
              className={"img-fluid"}
              width={577}
              height={433}
            />
          </div>
          <div className="form-content p-2">
            <h1 className={"fs-4 text-blue"}>Register</h1>
            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                {" "}
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                placeholder={"Full Name"}
                className={"form-control"}
              />
            </div>

            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                {" "}
                <MdOutlineVpnLock />
              </span>
              <input
                type="text"
                name="name"
                placeholder={"Profession"}
                className={"form-control"}
              />
            </div>

            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                {" "}
                <GrMail />
              </span>
              <input
                type="text"
                name="name"
                placeholder={"Email id"}
                className={"form-control"}
              />
            </div>

            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                {" "}
                <AiFillLock />{" "}
              </span>
              <input
                type="password"
                name="name"
                placeholder={"Password"}
                className={"form-control"}
              />
            </div>

            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                {" "}
                <MdLockPerson />
              </span>
              <input
                type="password"
                name="name"
                placeholder={"Confirm Password"}
                className={"form-control"}
              />
            </div>

            <div className="d-flex space-between mt-2 g-2">
              <button className={"btn-lg btn-blue"}>Sign In</button>
              <button className={"btn-lg btn-blue"}>
                <NavLink to={"/login"} className={"text-white"}>
                  Log In
                </NavLink>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
