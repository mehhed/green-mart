import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UserList from "../../components/deshbordComponent/adminComponent/UserList";
import UserListCard from "../../components/deshbordComponent/adminComponent/UserListCard";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

import useLoading from "../../Hooks/useLoading";

const ManageUser = () => {
  // loader
  const { loading, setLoading } = useLoading();

  const [allUsers, setAllUsers] = useState([]);
  const axiosPublic = useAxiosPublic();
  // addmin counter
  const [totalAdmin, setTotalAdmin] = useState(0);
  // user counter
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    axiosPublic.get("/allUser").then((result) => {
      setAllUsers(result.data);
      setLoading(false);
    });

    // total user and admin finder
    const user = allUsers.filter((one) => one.userRole == "user");
    setTotalUser(user.length);
    const admin = allUsers.filter((one) => one.userRole == "admin");
    setTotalAdmin(admin.length);
  }, [allUsers, axiosPublic]);

  // make admin or remov admin
  const handleMakeAdmin = (_id, email, role) => {
    axiosPublic
      .put(`/makeAdminOrRemov?email=${email}&role=${role}`)
      .then((res) => {
        if (res.data) {
          toast.success(`${email} now ${role}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  // delete user
  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/deleteUser/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    console.log(_id);
  };
  return (
    <div className="w-full lg:pr-5 lg:ps-0 p-5">
      {/* admin and user counter  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="h-[100px] w-full bg-gradient-to-r from-[#49dd7f] to-[#16a34a] rounded-lg text-white flex flex-col justify-center gap-3">
          <span className="flex items-center gap-2 text-2xl font-semibold text-center mx-auto">
            <MdAdminPanelSettings className="text-4xl"></MdAdminPanelSettings>{" "}
            <span>Total Admin</span>
          </span>
          <span className="text-lg font-semibold text-center block">
            {totalAdmin}
          </span>
        </div>
        <div className="h-[100px] w-full bg-gradient-to-r from-[#49dd7f] to-[#16a34a] rounded-lg text-white flex flex-col justify-center gap-3">
          <span className="flex items-center gap-2 text-2xl font-semibold text-center mx-auto">
            <FaUsers className="text-4xl"></FaUsers> <span>Total user</span>
          </span>
          <span className="text-lg font-semibold text-center block">
            {totalUser}
          </span>
        </div>
      </div>
      {/* table for lerg screen */}
      {loading ? (
        <div className="h-[300px] w-full lg:flex justify-center items-center hidden ">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="hidden xl:block">
            <table className="w-full table rounded-none  table-zebra bg-[#f2f2f2]  ">
              {/* head */}
              <thead className="text-lg capitalize">
                <tr className="border-b border-white">
                  <th>user name</th>
                  <th>user email</th>
                  <th>Make admin</th>
                  <th>Remov admin</th>
                  <th>status</th>
                  <th>Delete user</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((oneData) => (
                  <UserList
                    key={oneData?._id}
                    oneData={oneData}
                    handleDeleteUser={handleDeleteUser}
                    handleMakeAdmin={handleMakeAdmin}></UserList>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {/* card for small screen */}
      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center xl:hidden">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:hidden">
            {allUsers.map((oneData) => (
              <UserListCard
                key={oneData?._id}
                oneData={oneData}
                handleDeleteUser={handleDeleteUser}
                handleMakeAdmin={handleMakeAdmin}></UserListCard>
            ))}
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ManageUser;
