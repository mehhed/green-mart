import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" border-t-2 mt-10 lg:mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 lg:p-10">
        <div className="col-span-2">
          <Link to={"/"}>
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
              alt=""
            />
          </Link>
          <p className="text-sm text-center">
            DevoTech Technology Park, 4th Floor, House 11, Road 113/A,
            Gulshan-2, Dhaka-1212, Bangladesh
          </p>
          <h2 className="text-center text-lg font-semibold mt-2">
            PARTNERSHIP WITH
          </h2>
          <img
            src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-29%20194314.png"
            className="mx-auto mt-2"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">INFORMATION</h1>
          <Link className="block p-2 my-1">Sitemap</Link>
          <Link className="block p-2 my-1">Contact us</Link>
          <Link className="block p-2 my-1">Privacy Policy</Link>
          <Link className="block p-2 my-1">Conditions of Use</Link>
          <Link className="block p-2 my-1">About us</Link>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">MY ACCOUNT</h1>
          <Link className="block p-2 my-1">My account</Link>
          <Link className="block p-2 my-1">Orders</Link>
          <Link className="block p-2 my-1">Addresses</Link>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">CUSTOMER SERVICE </h1>
          <Link className="block p-2 my-1">My Cart</Link>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-bold mb-2">CUSTOMER SERVICE </h1>
          <a href="tel:+8801933995057" className="text-lg text-green-400">
            +8801933995057
          </a>
          <h1 className="text-lg font-bold my-2">NEWSLETTER </h1>
          <div className="flex-1 flex">
            <input
              className=" border border-[#1c8e4b] w-full rounded-s-lg p-2 text-lg outline-none "
              type="text"
              name=""
              id=""
              placeholder="Enter your email here....."
            />
            <div className="h-auto  bg-green-600 rounded-e-lg cursor-pointer text-white px-3 md:text-3xl flex justify-center items-center">
              <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
