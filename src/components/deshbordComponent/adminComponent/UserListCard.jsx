import React, { useContext } from "react";
import { AuthProvider } from "../../../Authentication/AuthenticationProvider";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const UserListCard = ({ oneData, handleDeleteUser, handleMakeAdmin }) => {
  const { _id, name, userEmail, userRole } = oneData;
  const { currentUser } = useContext(AuthProvider);
  return (
    <div className="border rounded-sm p-3 space-y-3">
      {/* user img */}
      <div className="avatar w-full">
        <div className="w-24 mx-auto rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <h1 className="font-semibold text-lg text-gray-600 text-center">
        {name}
      </h1>
      <p>email : {userEmail}</p>
      <p>user status : {userRole}</p>
      <div className="flex justify-center gap-5 items-center">
        <button
          onClick={() => handleMakeAdmin(_id, userEmail, "admin")}
          disabled={
            (currentUser?.email == userEmail && true) ||
            (userRole == "admin" && true)
          }
          className="btn btn-success text-white">
          Admin
        </button>
        <button
          onClick={() => handleMakeAdmin(_id, userEmail, "user")}
          disabled={
            (userRole == "user" && true) ||
            (currentUser?.email == userEmail && true)
          }
          className="btn btn-success text-white">
          Remov
        </button>
        <button
          onClick={() => {
            handleDeleteUser(_id);
          }}
          disabled={currentUser?.email == userEmail && true}
          className="btn rounded-none bg-white">
          <MdDelete className="text-2xl text-red-500"></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default UserListCard;

UserListCard.propTypes = {
  oneData: PropTypes.object,
  handleDeleteUser: PropTypes.func,
  handleMakeAdmin: PropTypes.func,
};
