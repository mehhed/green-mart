import { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { SiWindows } from "react-icons/si";
import { PiSignOut } from "react-icons/pi";
import { BiHome } from "react-icons/bi";
import { FaClipboardList, FaHamburger, FaPage4 } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { DiOnedrive } from "react-icons/di";
import { GrOrderedList, GrUpdate } from "react-icons/gr";
import { FcAdvertising } from "react-icons/fc";
import { MdMenu, MdOutlineAddBox } from "react-icons/md";

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
    <div className="flex  gap-5">
      {/* side navigation bar  */}
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn p-1 drawer-button lg:hidden rounded-none">
              <MdMenu className="text-3xl"></MdMenu>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link
                  to={"Dashbord"}
                  className="text-lg font-bold uppercase text-center py-5 text-white bg-gradient-to-r to-green-600  from-green-400 mb-5">
                  <SiWindows></SiWindows>Dashboard
                </Link>
              </li>
              <hr className="border-t-2 my-3" />
              <li>
                <Link to={"/"}>
                  <BiHome className="text-xl"></BiHome> Home
                </Link>
              </li>
              <hr className="border-t-2 my-3" />
              <li className="space-y-3">
                <Link to={"adminHome"} className="py-3">
                  <FaClipboardList className="text-xl"></FaClipboardList>{" "}
                  Transaction
                </Link>
                <Link to={"adminHome"} className="py-3">
                  <FaUserGroup className="text-xl"></FaUserGroup> Customer
                </Link>
                <Link to={"adminHome"} className="py-3">
                  <GrOrderedList className="text-xl"></GrOrderedList> Order
                </Link>
                <Link to={"adminHome"} className="py-3">
                  <FcAdvertising className="text-xl"></FcAdvertising> Promote
                </Link>
                <Link to={"adminHome"} className="py-3">
                  <MdOutlineAddBox className="text-xl"></MdOutlineAddBox> Add
                  product
                </Link>
                <Link to={"adminHome"} className="py-3">
                  <GrUpdate className="text-xl"></GrUpdate> Update Product
                </Link>
              </li>
              <hr className="border-t-2 my-3" />
              <li>
                <Link
                  className="flex py-5 bg-gradient-to-l font-bold text-white to-green-600  from-green-400  justify-center items-center gap-5"
                  onClick={handleSignOut}>
                  <PiSignOut className="text-xl"></PiSignOut>{" "}
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ms-auto h-full w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
