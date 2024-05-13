import { Outlet, useNavigation } from "react-router-dom";

// navigation  bar import here
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
const RooteHome = () => {
  const navigation = useNavigation();
  return (
    <div className="w-full h-auto">
      <div className="sticky top-0 z-[100]  lg:mb-0">
        <NavigationBar></NavigationBar>
      </div>
      {navigation.state === "loading" ? (
        <div className="w-full h-1/2 flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default RooteHome;
