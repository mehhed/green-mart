import React from "react";
import { Link } from "react-router-dom";

const Regestation = () => {
  return (
    <div className="w-full md:py-10 py-5 px-5 md:px-10 mx-auto">
      <h2 className="text-center md:text-4xl text-2xl uppercase font-semibold mb-5 bg-[#f6f6f6] md:py-5 py-3">
        Sign up
      </h2>
      <div className="grid grid-cols-1 md:flex justify-center items-center ">
        <div className="flex-1">
          <img
            src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="flex-1">
          <form
            action=""
            className="border px-5 md:px-10 pt-20 pb-12 flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              className="p-2 text-lg border rounded-sm outline-none"
              placeholder="  Name"
            />
            <label htmlFor="photo" className="text-sm">
              Chose your photo
            </label>
            <input
              type="file"
              name=""
              id="photo"
              className="p-2 text-lg border rounded-sm outline-none"
              placeholder="  Photo"
            />
            <input
              type="email"
              name=""
              id=""
              className="p-2 text-lg border rounded-sm outline-none"
              placeholder="  Email"
            />
            <input
              type="password"
              name=""
              id=""
              className="p-2 text-lg border rounded-sm outline-none"
              placeholder="  Password"
            />
            <div className="flex justify-between items-center">
              <Link>term and conditions</Link> <Link to={"/logIn"}>Log in</Link>
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Sign up"
                className="bg-gray-200 px-4 py-2 my-5 rounded-md "
              />
            </div>
            <hr />
            <div className="flex gap-4 justify-center items-end">
              <span className="bg-gray-200 px-4 py-2 mt-5 rounded-md ">
                Google
              </span>
              <span className="bg-gray-200 px-4 py-2 mt-5 rounded-md ">
                Facebook
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regestation;
