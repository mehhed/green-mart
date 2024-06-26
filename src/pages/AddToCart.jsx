import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import CartItemTable from "../components/CartItemTable";
import CartItemsCard from "../components/CartItemsCard";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddToCart = () => {
  // loged in user details
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get(`/allCart?email=${currentUser?.email}`).then((res) => {
      setCartItems(res?.data);
      setLoading(false);
    });
  }, [axiosPublic, currentUser?.email]);

  const handleDeleteFromCart = (_id) => {
    axiosPublic.delete(`/delete/${_id}`).then((res) => {
      console.log(res.data);
      if (res?.data?.deletedCount > 0) {
        const newCartData = cartItems.filter((one) => one?._id != _id);
        setCartItems(newCartData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "item deleted from  cart",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const totalPay = cartItems.reduce((total, currentItem) => {
    return total + currentItem.Price * currentItem.quntity;
  }, 0);

  return (
    <div className="px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-3 mt-5 lg:gap-5">
      <div className="col-span-2">
        <div className="w-full hidden md:block">
          {loading ? (
            <div className="flex flex-col gap-2">
              <div className="skeleton w-full h-[40px] rounded-md"></div>
              <div className="skeleton w-full h-[40px] rounded-md"></div>
              <div className="skeleton w-full h-[40px] rounded-md"></div>
              <div className="skeleton w-full h-[40px] rounded-md"></div>
            </div>
          ) : (
            <>
              <table className="border w-full">
                <thead className="">
                  <tr className="bg-[#f6f6f6]">
                    <th className="py-3">Remove</th>
                    <th className="py-3">Image</th>
                    <th className="py-3">Products</th>
                    <th className="py-3">Price</th>
                    <th className="py-3">Qty</th>
                    <th className="py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* table row  */}
                  {cartItems.map((oneCartData) => (
                    <CartItemTable
                      key={oneCartData._id}
                      oneCartData={oneCartData}
                      handleDeleteFromCart={
                        handleDeleteFromCart
                      }></CartItemTable>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* single card */}
          {loading ? (
            <>
              <div className="skeleton h-[400px w-full rounded-md]"> </div>
              <div className="skeleton h-[400px w-full rounded-md]"> </div>
            </>
          ) : (
            <>
              {" "}
              {cartItems.map((oneCartData) => (
                <CartItemsCard
                  key={oneCartData._id}
                  oneCartData={oneCartData}
                  handleDeleteFromCart={handleDeleteFromCart}></CartItemsCard>
              ))}
            </>
          )}
        </div>
      </div>

      {/* pay slip */}

      {loading ? (
        <div className="w-full h-[350px] skeleton rounded-sm"></div>
      ) : (
        <div className="p-5 bg-[#f6f6f6] mt-5 lg:mt-0">
          <div className="  space-y-2">
            <div className="flex justify-between items-center">
              <p>Total:</p>
              <p>{cartItems.length ? totalPay : "00"}.00৳</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Discount::</p>
              <p>00.00৳</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Subtotal Less Discount:</p>
              <p>00.00৳</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Vat rate:</p>
              <p>0.00৳</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Vat:</p>
              <p>0.00৳</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping:</p>
              <p>{cartItems.length ? 50 : "00"}.00৳</p>
            </div>
            <div className="flex justify-between items-center">
              <p>tax:</p>
              <p>0.00৳</p>
            </div>
            <div className="flex justify-between items-center text-green-500 text-lg font-semibold">
              <p>Total:</p>
              <p>{cartItems.length ? totalPay + 50 : "00"} </p>
            </div>
            <div className="flex justify-between items-center text-green-500 text-lg font-semibold">
              {totalPay < 500 ? (
                <span className="btn bg-[#ffd7cf] w-full rounded-none text-lg text-[#940324]">
                  Minimum order amount is 500.00৳
                </span>
              ) : (
                <Link to={"/payment"} className="w-full">
                  <button className="btn bg-[#4db74f] w-full rounded-none text-lg text-white">
                    Pay Now
                  </button>
                </Link>
              )}
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
