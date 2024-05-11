import React, { useState } from "react";
import PropTypes from "prop-types";
import useAdmin from "../Hooks/useAdmin";
import { BiDownArrow } from "react-icons/bi";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const OrdersTable = ({ data }) => {
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
      <tr className=" border-b text-center">
        <td className="py-2">
          <img className="max-w-[50px]" src={data?.PropertieImage} alt="" />
        </td>
        <td className="py-2 ">{data?.productName}</td>
        <td className="py-2 ">{data?.Price}Tk</td>
        <td className="py-2">{data?.quntity}</td>
        <td className="py-2">{data?.quntity * data?.Price}Tk</td>
        <td className="py-2">
          {admin?.userRole != "admin" || status == "Delevered" ? (
            status
          ) : (
            <>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
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
        </td>
        <td className="py-2">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}>
            see..
          </button>
        </td>
      </tr>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Delevery Address</h3>
          <hr className="mt-3" />
          <h2 className="text-lg text-gray-600">Contact info</h2>
          <hr />
          <p className="py-4 text-sm">
            Name :{data?.deleveryAddress?.firstName}{" "}
            {data?.deleveryAddress?.lastName}
            <br />
            Phone : {data?.deleveryAddress?.phoneNumber}
            <br />
            Email : {data?.deleveryAddress?.email}
          </p>
          <hr className="mt-3" />
          <h2 className="text-lg text-gray-600">Delevery info </h2>
          <hr />
          <p className="py-4 text-sm">
            Details : {data?.deleveryAddress?.addressDetails} <br />
            City : {data?.deleveryAddress?.city} <br />
            Post Code : {data?.deleveryAddress?.postCode} <br />
            Country : {data?.deleveryAddress?.country} <br />
            Message : {data?.deleveryAddress?.messageForDeveleveryMan} <br />
          </p>
        </div>
      </dialog>
    </>
  );
};

export default OrdersTable;

OrdersTable.propTypes = {
  data: PropTypes.object,
};
