import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Tasks from "../Components/Tasks.jsx";
import Navbar from "../Components/Navbar.jsx";
import AddTask from "../Components/AddTask.jsx";
import {useGlobalHook} from "../Hooks/Context.jsx";

const Home = () => {
  const navigate = useNavigate();
  const {isShowModal} = useGlobalHook()
  useEffect(() => {
    const user = Cookies.get("user");
    !user && navigate("/login");
  }, [navigate]);

  return (

    <>
      <div className="home">
        <Navbar />
        {isShowModal && <AddTask />}
        <Tasks />
      </div>

    </>
  );
};

export default Home;
