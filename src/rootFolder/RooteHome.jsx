import { Outlet } from "react-router-dom";

// navigation  bar import here
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
const RooteHome = () => {
  return (
    <div className="w-full h-auto">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RooteHome;
