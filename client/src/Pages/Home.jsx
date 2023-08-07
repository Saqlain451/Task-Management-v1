import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Tasks from "../Components/Tasks.jsx";
import Navbar from "../Components/Navbar.jsx";
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = Cookies.get("user");
    !user && navigate("/login");
  }, [navigate]);

  return (

    <>
      <div className="home">
        <Navbar />
        <Tasks />
      </div>

    </>
  );
};

export default Home;
