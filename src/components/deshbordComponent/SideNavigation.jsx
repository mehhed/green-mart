import { SiWindows } from "react-icons/si";
import { PiSignOut } from "react-icons/pi";
import { BiHome } from "react-icons/bi";
import { FaClipboardList, FaListUl, FaUserTie } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

import { GrOrderedList, GrUpdate } from "react-icons/gr";
import { FcAdvertising } from "react-icons/fc";
import {
  MdMenu,
  MdMessage,
  MdOutlineAddBox,
  MdOutlineAlternateEmail,
} from "react-icons/md";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoSettingsSharp } from "react-icons/io5";
import useAdmin from "../../Hooks/useAdmin";

const SideNavigation = ({ handleSignOut }) => {
  const adminChacker = useAdmin();
  return (
    <div className="bg-[#f2f2f2] hidden lg:block">
      <div className="drawer lg:drawer-open z-30 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn p-1 drawer-button lg:hidden rounded-none">
            <MdMenu className="text-3xl"></MdMenu>
          </label>
        </div>
        <div className="drawer-side h-auto">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link
                to={
                  adminChacker.userRole == "admin"
                    ? "/Dashbord/adminDashbord"
                    : "/Dashbord/userDeshbord"
                }
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
            {/* admin route  */}
            {adminChacker?.userRole == "admin" && (
              <li className="space-y-3">
                <Link to={"/Dashbord"} className="py-3">
                  <FaUserTie className="text-xl"></FaUserTie> My Aceount
                </Link>
                <Link to={"Transaction"} className="py-3">
                  <FaClipboardList className="text-xl"></FaClipboardList>{" "}
                  Transaction
                </Link>
                <Link to={"manageUser"} className="py-3">
                  <FaUserGroup className="text-xl"></FaUserGroup> Customer
                </Link>
                <Link to={"Orders"} className="py-3">
                  <GrOrderedList className="text-xl"></GrOrderedList> Orders
                </Link>
                <Link to={"Promote"} className="py-3">
                  <FcAdvertising className="text-xl"></FcAdvertising> Promote
                </Link>
                <Link to={"addProduct"} className="py-3">
                  <MdOutlineAddBox className="text-xl"></MdOutlineAddBox> Add
                  product
                </Link>
                <Link to={"UpdateProduct"} className="py-3">
                  <GrUpdate className="text-xl"></GrUpdate> Update Product
                </Link>
                <Link to={"/Dashbord/message"} className="py-3">
                  <MdMessage className="text-xl"></MdMessage> Message
                </Link>
                <Link to={"subscriber"} className="py-3">
                  <MdOutlineAlternateEmail className="text-xl"></MdOutlineAlternateEmail>{" "}
                  Subscribers
                </Link>
                <Link to={"Settings"} className="py-3">
                  <IoSettingsSharp className="text-xl"></IoSettingsSharp>{" "}
                  Settings
                </Link>
              </li>
            )}{" "}
            {/* user route  */}
            {adminChacker?.userRole == "user" && (
              <li className="space-y-3">
                <Link to={"/Dashbord"} className="py-3">
                  <FaUserTie className="text-xl"></FaUserTie> My Aceount
                </Link>
                <Link to={"Transaction"} className="py-3">
                  <FaClipboardList className="text-xl"></FaClipboardList>{" "}
                  Transaction
                </Link>

                <Link to={"order"} className="py-3">
                  <FaListUl className="text-xl"></FaListUl> My Order
                </Link>
              </li>
            )}
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
  );
};

export default SideNavigation;

SideNavigation.propTypes = {
  handleSignOut: PropTypes.func,
};
