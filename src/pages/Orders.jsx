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

  const [data, setModalData] = useState({});

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/order?email=${currentUser?.email}`).then((res) => {
      setOrders(res.data);
      setLoading(false);
    });
  }, [currentUser?.email]);

  const handleModalFunction = (modalData) => {
    setModalData(modalData);
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <>
      <div className="px-5 lg:ps-0 pr-5 h-full">
        <h1 className="text-3xl font-semibold px-5 text-center py-5 mb-2 bg-[#f2f2f2] ">
          All Orders
        </h1>

        {loading ? (
          <div className="h-[300px] w-full flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div className="w-full  grid grid-cols-1  md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {orders.map((oneData) => (
              <OrdersTable
                key={oneData?._id}
                data={oneData}
                handleModalFunction={handleModalFunction}></OrdersTable>
            ))}
          </div>
        )}
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="space-y-2">
            <h3 className="font-bold text-xl">Delevery Address</h3>
            <hr />
            <p>Order ID : {data?._id}</p>
            <hr className="" />
            <h2 className="text-lg text-gray-600">Contact info</h2>
            <hr />
            <p className=" text-sm">
              Name :{data?.deleveryAddress?.firstName}{" "}
              {data?.deleveryAddress?.lastName}
              <br />
              Phone : {data?.deleveryAddress?.phoneNumber}
              <br />
              Email : {data?.deleveryAddress?.email}
            </p>
            <hr className="" />
            <h2 className="text-lg text-gray-600">Delevery info </h2>
            <hr />
            <p className=" text-sm">
              Details : {data?.deleveryAddress?.addressDetails} <br />
              City : {data?.deleveryAddress?.city} <br />
              Post Code : {data?.deleveryAddress?.postCode} <br />
              Country : {data?.deleveryAddress?.country} <br />
              Message : {data?.deleveryAddress?.messageForDeveleveryMan} <br />
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Orders;
