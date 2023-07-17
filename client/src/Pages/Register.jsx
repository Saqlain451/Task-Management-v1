import { FaUser } from "react-icons/fa";
import { MdLockPerson, MdOutlineVpnLock } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useGlobalHook } from "../Hooks/Context.jsx";

const Register = () => {
  const { regCahngeHandler, regData,registerHandler,isloginLoading} = useGlobalHook();
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
            {/*-------------------------- Name --------------------------*/}
            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                placeholder={"Full Name"}
                className={"form-control"}
                value={regData.name}
                onChange={regCahngeHandler}
              />
            </div>
            {/*--------------------------Profession ------------------------*/}
            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                <MdOutlineVpnLock />
              </span>
              <input
                type="text"
                name="prof"
                placeholder={"Profession"}
                className={"form-control"}
                value={regData.prof}
                onChange={regCahngeHandler}
              />
            </div>
            {/*-----------------------Email id ------------------------------*/}
            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                <GrMail />
              </span>
              <input
                type="text"
                name="mail"
                placeholder={"Email id"}
                className={"form-control"}
                value={regData.mail}
                onChange={regCahngeHandler}
              />
            </div>
            {/*----------------------Password -----------------------------------*/}
            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                <AiFillLock />
              </span>
              <input
                type="password"
                name="pass"
                placeholder={"Password"}
                className={"form-control"}
                value={regData.pass}
                onChange={regCahngeHandler}
              />
            </div>
            {/*-------------------Confirm Password ----------------------------------*/}
            <div className={"input-filed"}>
              <span className={"fs-1-5 text-blue d-flex center"}>
                <MdLockPerson />
              </span>
              <input
                type="password"
                name="cPass"
                placeholder={"Confirm Password"}
                className={"form-control"}
                value={regData.cPass}
                onChange={regCahngeHandler}
              />
            </div>
            {/*------------------form button ---------------------------*/}
            <div className="d-flex space-between mt-2 g-2">
              <button
                  className={"btn-lg btn-blue d-flex center"}
                  onClick={registerHandler}
              >
                {isloginLoading ? (
                    <span className={"btn-loader"}></span>
                ) : (
                    "Sign In"
                )}
              </button>
              <button
                className={"btn-lg btn-blue"}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
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
