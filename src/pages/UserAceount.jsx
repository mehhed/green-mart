import React, { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { FaBuilding, FaRegUserCircle } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const UserAceount = () => {
  const { currentUser } = useContext(AuthProvider);
  const adminchacker = useAdmin();
  return (
    <div className="mx-5 lg:mr-5">
      <h1 className="text-3xl font-semibold bg-[#f6f6f6] p-3">
        {" "}
        Hi, {currentUser?.displayName}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center mt-3">
        <div className="border-r-[#2fbf64] border-r-2 bg-[#f6f6f6] flex-1 w-full flex justify-center flex-col items-center py-10">
          {currentUser?.photoURL ? (
            <img
              src={currentUser?.photoURL}
              className="w-[200px] h-[200px] rounded-full"
              alt=""
            />
          ) : (
            <FaRegUserCircle className="w-[200px] h-[200px] rounded-full"></FaRegUserCircle>
          )}
          <h1 className="text-3xl mt-3 text-center font-semibold">
            {currentUser?.displayName}
          </h1>
        </div>
        <div className="p-5 h-full bg-[#f6f6f6]">
          <h1 className="text-3xl text-center font-semibold underline">
            Your Activities
          </h1>
          <div className="text-lg mt-auto space-y-3">
            <p>Name : {currentUser?.displayName} </p>
            <p>Email : {currentUser?.email} </p>
            <p>
              Phone :{" "}
              {currentUser?.phoneNumber
                ? currentUser?.phoneNumber
                : "+880**********"}{" "}
            </p>
            <p>aceount status : {adminchacker.userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAceount;
