import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = Cookies.get("user");
    !user && navigate("/login");
  }, [navigate]);
  return <> Home </>;
};

export default Home;