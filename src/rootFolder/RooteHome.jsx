import { Outlet } from "react-router-dom";

// navigation  bar import here
import NavigationBar from "../components/NavigationBar";
const RooteHome = () => {
  return (
    <div className="w-full h-auto">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default RooteHome;
