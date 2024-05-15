import React, { useContext, useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { AuthProvider } from "../../Authentication/AuthenticationProvider";
import useAdmin from "../../Hooks/useAdmin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UserDeshbord = () => {
  const { currentUser } = useContext(AuthProvider);
  const adminChecker = useAdmin();
  console.log(adminChecker);
  const axiosPublic = useAxiosPublic();
  const [deshbordData, setDeshbordData] = useState({});

  useEffect(() => {
    if (adminChecker?.userRole == "user") {
      axiosPublic
        .get(`/userDeshbord?email=${currentUser?.email}`)
        .then((res) => {
          setDeshbordData(res?.data);
        });
    }
  }, [adminChecker?.userRole, axiosPublic, currentUser?.email]);

  console.log(deshbordData);

  return (
    <div className="px-5 lg:ps-0 pr-5">
      <h1 className="text-3xl font-semibold px-5 py-5 mb-2 bg-[#f2f2f2] ">
        Hi, {currentUser?.displayName}
      </h1>
      {/* tatal cost */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
        <div className="px-5 md:px-10 lg:px-20 py-5 md:py-7 lg:py-10 bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 text-center">
            Total Cost
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalCost} Tk
          </p>
        </div>
        {/* total order  */}
        <div className="px-5 md:px-10 lg:px-20 py-5 md:py-7 lg:py-10 bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 text-center">
            Total Order
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalOrders}
          </p>
        </div>
        {/* total carted item  */}
        <div className="px-5 md:px-10 lg:px-20 py-5 md:py-7 lg:py-10 bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 text-center">
            Total carted item
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalCartItem}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDeshbord;
