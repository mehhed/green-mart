import { Link, useNavigate } from "react-router-dom";

// react icon import
import {
  FaClipboardList,
  FaFacebook,
  FaRegUserCircle,
  FaUserTie,
} from "react-icons/fa";
import { GiFruitBowl, GiShoppingCart, GiVanillaFlower } from "react-icons/gi";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import "../index.css";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { BiHome } from "react-icons/bi";
import { SiCardano, SiWindows } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { GrOrderedList, GrUpdate } from "react-icons/gr";
import { FcAdvertising } from "react-icons/fc";
import { PiSignOut } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { GiCirclingFish } from "react-icons/gi";
import useAdmin from "../Hooks/useAdmin";
import { MdMessage, MdOutlineAddBox } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const NavigationBar = () => {
  // loged in user details
  const { currentUser, signOutuser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const adminChacker = useAdmin();
  const navigate = useNavigate();

  console.log(currentUser);
  console.log(adminChacker);

  const [totalCartItems, setCartItems] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/allCart?email=${currentUser?.email}`).then((res) => {
      setCartItems(res?.data);
    });
  }, [currentUser?.email]);

  // signOut user
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
    <>
      {/*  navigation for dasktop  */}
      <div className=" flex justify-between items-center lg:px-[100px] px-5 lg:gap-10 gap-1 py-[20px] lg:py-0">
        <div className="flex justify-center items-center gap-5">
          <label
            htmlFor="my-drawer-two"
            className="text-gray-400 text-4xl lg:hidden">
            <HiMenuAlt1></HiMenuAlt1>
          </label>
        </div>

        {/*shop logo */}
        <div className="flex-1 hidden lg:block">
          <Link href="/" className="inline-block mx-auto lg:me-auto">
            <img
              className="h-auto sm:max-w-[300px]"
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
              alt="shop logo"
            />
          </Link>
        </div>
        <div className=" lg:flex-1 flex justify-end items-center gap-3 text-gray-400 lg:px-5">
          <Link
            to={"https://www.facebook.com/mehedihasan.rifat.52056"}
            className="text-3xl">
            <FaFacebook></FaFacebook>
          </Link>
          {/* cart page navigator  */}
          {adminChacker?.userRole == "user" && (
            <Link to={"/addToCartPage"} className="text-3xl mr-5 mt-2">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">
                  {totalCartItems.length > 10 ? "10+" : totalCartItems.length}
                </span>
                <button className="">
                  <GiShoppingCart />
                </button>
              </div>
            </Link>
          )}
          {/* deshbord navigator */}
          <Link to={"/Dashbord"}>
            <span className="text-3xl">
              {currentUser?.photoURL ? (
                <img
                  src={currentUser?.photoURL}
                  className="h-[40px] w-[40px] rounded-full"
                  alt=""
                />
              ) : (
                <FaRegUserCircle></FaRegUserCircle>
              )}
            </span>
          </Link>
        </div>
      </div>

      {/*========================================= droyer for smaller device nabbar ======================================================= */}
      {/* drawer   */}
      <div className="drawer z-50">
        <input id="my-drawer-two" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-two"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-[50%]  min-h-full bg-[#f2f2f2] text-base-content">
            {/* Sidebar content here */}
            {currentUser?.email && (
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
            )}
            <hr className="border-t-2 my-3" />
            <li>
              <Link to={"/"}>
                <BiHome className="text-xl"></BiHome> Home
              </Link>
            </li>
            <hr className="border-t-2 my-3" />
            <li className="space-y-3">
              {/* public route  */}
              <Link to={"/allProduct/allProduct"} className="py-3">
                <SiCardano className="text-xl"></SiCardano> All Product
              </Link>
              <Link to={"/allProduct/MEAT"} className="py-3">
                <TbMeat className="text-xl"></TbMeat> Meat
              </Link>
              <Link to={"/allProduct/FISH"} className="py-3">
                <GiCirclingFish className="text-xl"></GiCirclingFish> Fish
              </Link>
              <Link to={"/allProduct/FRUITS"} className="py-3">
                <GiFruitBowl className="text-xl"></GiFruitBowl> Fruits
              </Link>
              <Link to={"/allProduct/VEGETABLES"} className="py-3 border-b-2">
                <GiVanillaFlower className="text-xl "></GiVanillaFlower>{" "}
                Vegetables
              </Link>

              {/* admin route  */}
              {adminChacker.userRole == "admin" && (
                <>
                  <Link to={"/Dashbord/Transaction"} className="py-3">
                    <FaClipboardList className="text-xl"></FaClipboardList>{" "}
                    Transaction
                  </Link>
                  <Link to={"/Dashbord/manageUser"} className="py-3">
                    <FaUserGroup className="text-xl"></FaUserGroup> Customer
                  </Link>
                  <Link to={"/Dashbord/Orders"} className="py-3">
                    <GrOrderedList className="text-xl"></GrOrderedList> Order
                  </Link>
                  <Link to={"/Dashbord/Promote"} className="py-3">
                    <FcAdvertising className="text-xl"></FcAdvertising> Promote
                  </Link>
                  <Link to={"/Dashbord/addProduct"} className="py-3">
                    <MdOutlineAddBox className="text-xl"></MdOutlineAddBox> Add
                    product
                  </Link>
                  <Link to={"/Dashbord/UpdateProduct"} className="py-3">
                    <GrUpdate className="text-xl"></GrUpdate> Update Product
                  </Link>
                  <Link to={"/Dashbord/Settings"} className="py-3">
                    <IoSettingsSharp className="text-xl"></IoSettingsSharp>{" "}
                    Settings
                  </Link>
                  <Link to={"/Dashbord/message"} className="py-3">
                    <MdMessage className="text-xl"></MdMessage> Message
                  </Link>
                </>
              )}
            </li>{" "}
            {/* user route  */}
            {adminChacker?.userRole == "user" && (
              <li className="space-y-3">
                <Link to={"/Dashbord"} className="py-3">
                  <FaUserTie className="text-xl"></FaUserTie> My Aceount
                </Link>
              </li>
            )}
            <hr className="border-t-2 my-3" />
            {currentUser?.email && (
              <li>
                <Link
                  className="flex py-5 bg-gradient-to-l font-bold text-white to-green-600  from-green-400  justify-center items-center gap-5"
                  onClick={handleSignOut}>
                  <PiSignOut className="text-xl"></PiSignOut>{" "}
                  <span>Sign Out</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* sub navigation bar  */}
      <div className="bg-[#f6f6f6] lg:flex items-center px-[100px] hidden mb-5 ">
        <div className="relative hover-menu-parent">
          <span className="border-r-4 pr-5 py-4 border-white flex items-center  gap-2">
            <HiMenuAlt2 /> <span>ALL CATEGORIES</span>
          </span>
          <div className="flex flex-col absolute top-[100%] left-0 w-full border-r-2 bg-white border-white hover-menu-content z-40">
            <Link to={"/allProduct/FISH"} className="border border-b-2 p-2 ">
              Fish
            </Link>
            <Link to={"/allProduct/MEAT"} className="border border-b-2 p-2 ">
              Meat
            </Link>
            <Link to={"/allProduct/FRUITS"} className="border border-b-2 p-2 ">
              Fruits
            </Link>
            <Link
              to={"/allProduct/VEGETABLES"}
              className="border border-b-2 p-2 ">
              Vegetables
            </Link>
          </div>
        </div>
        <div className="ms-auto">
          <Link to={"/"} className="inline-block py-4 ">
            Home
          </Link>
          <Link
            to={"/allProduct/allProduct"}
            className="inline-block py-4 ml-5">
            All Product
          </Link>
          <Link to={"/contact"} className="inline-block py-4 ml-5 ">
            Contact Us{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
