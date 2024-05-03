import React, { useContext } from "react";
import { FaBuilding } from "react-icons/fa";
import { AuthProvider } from "../../Authentication/AuthenticationProvider";

const UserDeshbord = () => {
  const { currentUser } = useContext(AuthProvider);
  return (
    <div className="px-5 lg:ps-0 pr-5">
      <h1 className="text-3xl font-semibold px-5 py-5 mb-2 bg-[#f2f2f2] ">
        Hi, {currentUser?.displayName}
      </h1>
      <div></div>
    </div>
  );
};

export default UserDeshbord;
