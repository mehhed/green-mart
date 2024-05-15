import React, { useContext, useEffect, useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthProvider } from "../../Authentication/AuthenticationProvider";
import Paichart from "../../components/deshbordComponent/adminComponent/Paichart";

const AdminDashbord = () => {
  const adminChecker = useAdmin();
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const [deshbordData, setDeshbordData] = useState({});

  useEffect(() => {
    if (adminChecker?.userRole == "admin") {
      axiosPublic.get(`/adminDeshbord`).then((res) => {
        setDeshbordData(res?.data);
      });
    }
  }, [adminChecker?.userRole, axiosPublic, currentUser?.email]);

  console.log(deshbordData);

  const data = [
    { label: " Meat ", value: deshbordData?.maetOrders, color: "#0088FE" },
    {
      label: "Vegetable",
      value: deshbordData?.vergetableOrders,
      color: "#00C49F",
    },
    { label: " Fruits", value: deshbordData?.fruitsOrders, color: "#FFBB28" },
    { label: "Fish", value: deshbordData?.fishOrders, color: "#FF8042" },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };

  return (
    <div className="px-5 lg:ps-0 pr-5">
      <h1 className="text-3xl font-semibold bg-[#f6f6f6] p-3">
        {" "}
        Hi, {currentUser?.displayName}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-5">
        <div className="px-5 md:px-10  py-5 md:py-7  bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl  font-semibold text-gray-600 text-center">
            Total Earn
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalEarn} Tk
          </p>
        </div>
        {/* total order  */}
        <div className="px-5 md:px-10  py-5 md:py-7  bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl  font-semibold text-gray-600 text-center">
            total order
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalOrders}
          </p>
        </div>
        {/* total carted item  */}
        <div className="px-5 md:px-10  py-5 md:py-7  bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl  font-semibold text-gray-600 text-center">
            Active order
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.activeOrders}
          </p>
        </div>
        {/* total carted item  */}
        <div className="px-5 md:px-10  py-5 md:py-7  bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl  font-semibold text-gray-600 text-center">
            Total Product
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalProducts}
          </p>
        </div>
        {/* total carted item  */}
        <div className="px-5 md:px-10  py-5 md:py-7  bg-[#f6f6f6] rounded-md">
          <h2 className="text-lg md:text-xl  font-semibold text-gray-600 text-center">
            Total Users
          </h2>
          <p className="text-lg text-center text-gray-600">
            {deshbordData?.totalUsers}
          </p>
        </div>
      </div>
      <section className="mt-5 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <h1 className="text-lg text-gray-500">Upcomming....</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg text-gray-500">Sales By Category</h2>
          <Paichart data={data} sizing={sizing} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="h-[10px] mr-2 w-[10px] inline-block rounded-full bg-[#0088FE]"></span>
              Meat
            </div>
            <div>
              <span className="h-[10px] mr-2 w-[10px]  inline-block rounded-full bg-[#00C49F]"></span>
              Vegetable
            </div>
            <div>
              <span className="h-[10px] mr-2 w-[10px] inline-block rounded-full bg-[#FFBB28]"></span>
              Fruits
            </div>
            <div>
              <span className="h-[10px] mr-2 w-[10px] inline-block rounded-full bg-[#FF8042]"></span>
              Fish
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashbord;
