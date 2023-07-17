import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
