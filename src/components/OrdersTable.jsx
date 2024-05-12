import React, { useState } from "react";
import PropTypes from "prop-types";
import useAdmin from "../Hooks/useAdmin";
import { BiDownArrow } from "react-icons/bi";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const OrdersTable = ({ data, handleModalFunction }) => {
  const admin = useAdmin();
  const axiosPublic = useAxiosPublic();

  const [status, setStatus] = useState(data?.deleveryStatus);

  const handleOrderStatus = (newStatus) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .put(`/statusUpdate?id=${data?._id}&status=${newStatus}`)
          .then((res) => {
            if (res?.data) {
              setStatus(newStatus);
              Swal.fire({
                title: "success",
                text: "Order status is update...",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <>
      {/* each product Card  */}
      <div className="card  bg-base-100 shadow-xl">
        <figure className="w-full">
          <img
            className="w-[80%] mx-auto"
            src={data?.PropertieImage}
            alt="product"
          />
        </figure>

        <div className="card-body p-2 flex flex-col">
          {/* card bordy  */}
          <div className="flex-1">
            <h2 className="card-title">{data?.productName}</h2>
            <div className="space-y-0">
              <p>Price : {data?.Price}</p>
              <p>Quntity : {data?.quntity}</p>
              <p>Total Price : {data?.quntity * data?.Price}</p>
            </div>
          </div>

          {/*  card action  */}
          <div className="w-full space-y-2">
            <div className="w-full">
              {admin?.userRole != "admin" || status == "Delevered" ? (
                <button className="btn disabled w-full bg-white">
                  {" "}
                  {status}
                </button>
              ) : (
                <>
                  <div className="dropdown w-full">
                    <div tabIndex={0} role="button" className="btn w-full">
                      {status} <BiDownArrow></BiDownArrow>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <button onClick={() => handleOrderStatus("Accept")}>
                          Accept
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleOrderStatus("On The Way")}>
                          On The Way
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleOrderStatus("Out of Delevery")}>
                          Out of Delevery
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleOrderStatus("Delevered")}>
                          Delevered
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <button
              className="btn w-full"
              onClick={() => handleModalFunction(data)}>
              Delevery Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersTable;

OrdersTable.propTypes = {
  data: PropTypes.object,
  handleModalFunction: PropTypes.func,
};
