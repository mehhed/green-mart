import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { AuthProvider } from "../../../Authentication/AuthenticationProvider";

const UserList = ({ oneData, handleDeleteUser, handleMakeAdmin }) => {
  const { currentUser } = useContext(AuthProvider);
  const { _id, name, userEmail, userRole } = oneData;
  return (
    <tr className="border-b border-white">
      <td>{name}</td>
      <td> {userEmail}</td>
      <td>
        <button
          onClick={() => handleMakeAdmin(_id, userEmail, "admin")}
          disabled={
            (currentUser?.email == userEmail && true) ||
            (userRole == "admin" && true)
          }
          className="btn btn-success text-white">
          Admin
        </button>
      </td>
      <td>
        <button
          onClick={() => handleMakeAdmin(_id, userEmail, "user")}
          disabled={
            (userRole == "user" && true) ||
            (currentUser?.email == userEmail && true)
          }
          className="btn btn-success text-white">
          Remov
        </button>
      </td>
      <td className="uppercase font-bold">{userRole}</td>
      <td>
        <button
          onClick={() => handleDeleteUser(_id)}
          disabled={currentUser?.email == userEmail && true}
          className="btn bg-white">
          <MdDelete className="text-2xl text-red-500"></MdDelete>
        </button>
      </td>
    </tr>
  );
};

export default UserList;

UserList.propTypes = {
  oneData: PropTypes.object,
  handleDeleteUser: PropTypes.func,
  handleMakeAdmin: PropTypes.func,
};
