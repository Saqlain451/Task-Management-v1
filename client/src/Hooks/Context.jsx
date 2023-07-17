import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

//create context
const appContext = React.createContext(undefined);

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const api = import.meta.env.VITE_API_KEY;
  console.log(api);
  // -------------- Log in Field -------------------------->
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
      const res = await axios.post("http://localhost:4001/loginUser", {
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

  // End of login ------------>
  return (
    // eslint-disable-next-line react/no-children-prop
    <appContext.Provider
      value={{ loginData, loginChangeHandler, loginHandler,isloginLoading,isLogin}}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalHook = () => useContext(appContext);

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalHook };
