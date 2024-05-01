import { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { Link, Outlet, useNavigate } from "react-router-dom";

import SideNavigation from "../components/deshbordComponent/SideNavigation";

const Dashbord = () => {
  const { signOutuser } = useContext(AuthProvider);
  const navigate = useNavigate();
  // function for signout
  const handleSignOut = () => {
    signOutuser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex gap-5 ">
      {/* side navigation bar  */}
      <SideNavigation handleSignOut={handleSignOut}></SideNavigation>
      <div className="ms-auto h-full w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
