import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

//create context
const appContext = React.createContext(undefined);

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const api = import.meta.env.VITE_API_KEY;
  // -------------------------------------- Log in Field ----------------------------------------------->
  const [loginData, setLoginData] = useState({
    mail: "",
    pass: "",
  });

  const [isloginLoading, setislogLoading] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setislogLoading(true);
    try {
      const res = await axios.post(`${api}/loginUser`, {
        ...loginData,
      });

      if (res.status === 201) {
        setislogLoading(false);
        toast.success(res.data.msg, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
        setIslogin(true);
        res.data.userDetails &&
          Cookies.set("user", JSON.stringify(res.data.userDetails), {
            expires: 1 / 24,
            path: "/",
          });
      }
    } catch (error) {
      const { err } = error.response.data;
      const { status } = error.response;
      if (status === 401) {
        setislogLoading(false);
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      }
    }
  };

  //------------------------------------------------------- End of login ========================------------>

  //---------------------------------------------------Start Register Part ---------------------------------->
  const [regData, setRegData] = useState({
    name: "",
    prof: "",
    mail: "",
    pass: "",
    cPass: "",
  });

  const regCahngeHandler = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setislogLoading(true);
    try {
      const response = await axios.post(`${api}/createUser`, { ...regData });
      if (response.status === 201) {
        setislogLoading(false);
        toast.success(response.data.msg, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      }
    } catch (error) {
      if (error.response.status === 401) {
        setislogLoading(false);
        toast.error(error.response.data.err, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      }
    }
  };
  // -------------------- show modal ---------------------->

  const [isShowModal, setIsShowModel] = useState(false);

  // ---------------------Get all task ----------------->
  const [allTaskData, setAllTaskData] = useState([]);
  const [count, setCount] = useState({
    active: 0,
    pending: 0,
    completed: 0,
  });

  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isError, setIsError] = useState(false);
  const getAllData = async (url) => {
    setIsLoadingData(true);
    setIsError(false);
    try {
      const response = await axios.get(url);
      const { all, pending, completed } = response.data;
      setAllTaskData(response.data.success);
      response.data.success && setIsLoadingData(false);
      setCount({
        active: all,
        pending,
        completed,
      });
    } catch (error) {
      console.error(error);
      error && setIsLoadingData(false);
      error && setIsError(true);
    }
  };

  // toggle button click functionality ----->

  const [isBtnActive, setisBtnActive] = useState({
    Tasks: true,
    Pending: false,
    Completed: false,
  });

  const navBtnClick = (e) => {
    const user = Cookies.get("user");
    const userDet = JSON.parse(user);
    const { mail } = userDet;
    const btnName = e.target.innerText;
    setisBtnActive({ [btnName]: true });
    if (btnName === "Tasks") {
      getAllData(`${api}/getTask/${mail}`);
    } else if (btnName === "Pending") {
      getAllData(`${api}/getTask/${mail}/Working`);
    } else if (btnName === "Completed") {
      getAllData(`${api}/getTask/${mail}/Completed`);
    }
  };

  return (
    // eslint-disable-next-line react/no-children-prop
    <appContext.Provider
      value={{
        loginData,
        loginChangeHandler,
        loginHandler,
        isloginLoading,
        isLogin,
        regCahngeHandler,
        regData,
        registerHandler,
        isShowModal,
        setIsShowModel,
        api,
        getAllData,
        allTaskData,
        isBtnActive,
        navBtnClick,
        count,
        isLoadingData,
        isError
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalHook = () => useContext(appContext);

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalHook };
