import { Link } from "react-router-dom";

// react icon import
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

import "../index.css";
import { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const NavigationBar = () => {
  // loged in user details
  const { currentUser } = useContext(AuthProvider);

  return (
    <>
      {/*  navigation for dasktop  */}
      <div className=" flex justify-between items-center lg:px-[100px] px-5 lg:gap-10 gap-1  ">
        <div className="flex justify-center items-center gap-5">
          <label
            htmlFor="my-drawer-two"
            className="text-gray-400 md:text-4xl lg:hidden">
            <HiMenuAlt1></HiMenuAlt1>
          </label>

          <label
            htmlFor="my-drawer-one"
            className="text-gray-400 md:text-4xl lg:hidden">
            <IoSearchOutline></IoSearchOutline>
          </label>
        </div>

        {/*shop logo */}
        <div className="flex-1">
          <Link href="/" className="inline-block mx-auto lg:me-auto">
            <img
              className="h-auto sm:max-w-[300px]"
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
              alt="shop logo"
            />
          </Link>
        </div>
        {/* search bar  */}
        <div className="flex-1 lg:flex hidden">
          <input
            className=" border-2 border-[#1c8e4b] w-full rounded-s-lg p-2 text-lg outline-none "
            type="text"
            name=""
            id=""
            placeholder=" Search"
          />
          <div className="h-auto  bg-green-600 rounded-e-lg cursor-pointer text-white px-3 md:text-3xl flex justify-center items-center">
            <IoSearchOutline />
          </div>
        </div>
        {/* other nav */}
        <div className=" lg:flex-1 flex justify-end items-center gap-3 text-gray-400 lg:px-5">
          <Link to={"/login"}>
            <span className="md:text-4xl">
              <GiShoppingCart />
            </span>
          </Link>
          <Link to={"/Dashbord"}>
            <span className="md:text-3xl">
              <FaRegUserCircle></FaRegUserCircle>
            </span>
          </Link>
        </div>
      </div>

      {/*========================================= droyer for smaller device nabbar ======================================================= */}

      {/* droyer one  */}
      <div className="drawer">
        <input id="my-drawer-one" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-one"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  p-4  min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-one"
              aria-label="close sidebar"
              className="drawer-overlay mb-5 ml-auto">
              <RxCross1 />
            </label>

            <div className="flex">
              <input
                className=" border-2 border-[#1c8e4b] w-full rounded-s-lg p-2 text-lg outline-none "
                type="text"
                name=""
                id=""
                placeholder=" Search"
              />
              <div className="h-auto    bg-green-600 rounded-e-lg cursor-pointer text-white px-3 text-3xl flex justify-center items-center">
                <IoSearchOutline />
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/* droyer two   */}
      <div className="drawer">
        <input id="my-drawer-two" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-two"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-[50%]  min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li className="border-b-gray-400 border-2 ">
              <Link to={"/"} className="focus:bg-gray-300 focus:rounded-none">
                Home
              </Link>
            </li>
            <li className="border-b-gray-400 border-2">
              <Link className="focus:bg-gray-300 focus:rounded-none">
                Vegetables
              </Link>
            </li>
            <li className="border-b-gray-400 border-2">
              <Link className="focus:bg-gray-300 focus:rounded-none">Fish</Link>
            </li>
            <li className="border-b-gray-400 border-2">
              <Link className="focus:bg-gray-300 focus:rounded-none">Meat</Link>
            </li>
            <li className="border-b-gray-400 border-2">
              <Link className="focus:bg-gray-300 focus:rounded-none">
                Fruits
              </Link>
            </li>
            <li className="border-b-gray-400 border ">
              <Link className="focus:bg-gray-300 focus:rounded-none">
                Contact us
              </Link>
            </li>
            <label
              htmlFor="my-drawer-two"
              aria-label="close sidebar"
              className="drawer-overlay mt-5 mx-auto">
              <RxCross1 />
            </label>
          </ul>
        </div>
      </div>

      {/* sub navigation bar  */}
      <div className="bg-[#f6f6f6] lg:flex items-center px-[100px] hidden ">
        <div className="relative hover-menu-parent">
          <Link className="border-r-4 pr-5 py-4 border-white flex items-center  gap-2">
            <HiMenuAlt2 /> <span>ALL CATEGORIES</span>
          </Link>
          <div className="flex flex-col absolute top-[100%] left-0 w-full border-r-2 bg-white border-white hover-menu-content ">
            <Link className="border border-b-2 p-2 ">Fish</Link>
            <Link className="border border-b-2 p-2 ">Meat</Link>
            <Link className="border border-b-2 p-2 ">Fruits</Link>
            <Link className="border border-b-2 p-2 ">Vegetables</Link>
          </div>
        </div>
        <div className="ms-auto">
          <Link className="inline-block py-4 ">Home</Link>
          <Link className="inline-block py-4 ml-5 ">Contact Us </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
