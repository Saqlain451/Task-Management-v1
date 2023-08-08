import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = lazy(() => import("./Pages/Login.jsx"));
const Register = lazy(() => import("./Pages/Register.jsx"));
const Home = lazy(() => import("./Pages/Home.jsx"));
const AddTask = lazy(() => import("./Components/AddTask.jsx"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader-circle">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/add-task"} element={<AddTask />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
