import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import OrdersTable from "../components/OrdersTable";
import useAdmin from "../Hooks/useAdmin";
import useLoading from "../Hooks/useLoading";
const Orders = () => {
  const { loading, setLoading } = useLoading();
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const admin = useAdmin();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosPublic
      .get(`/order?email=${currentUser?.email}&role${admin?.userRole}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      });
  }, [admin?.userRole, currentUser?.email]);

  return (
    <div className="px-5 lg:ps-0 pr-5 h-full">
      <h1 className="text-3xl font-semibold px-5 text-center py-5 mb-2 bg-[#f2f2f2] ">
        All Orders
      </h1>
      {/* transaction table  */}

      <hr className="" />

      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="w-full h-auto  overflow-x-auto">
          <table className="  table rounded-none  table-zebra ">
            {/* head */}
            <thead className="lg:text-lg text-xs capitalize bg-[#f2f2f2]">
              <tr className="border-b  text-center">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quntity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Delevery Address</th>
              </tr>
            </thead>
            <tbody className="lg:text-lg text-xs">
              {orders.map((oneData) => (
                <OrdersTable key={oneData?._id} data={oneData}></OrdersTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
