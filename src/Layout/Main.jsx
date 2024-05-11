import { Outlet } from "react-router-dom";
import MyFooter from "../pages/home/MyFooter";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Main;
