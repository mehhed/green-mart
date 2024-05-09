import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import CartItemTable from "../components/CartItemTable";
import CartItemsCard from "../components/CartItemsCard";
import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";

const AddToCart = () => {
  // loged in user details
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const [cartItems, setCartItems] = useState([]);
  const { setCart } = useCart();

  useEffect(() => {
    axiosPublic.get(`/allCart?email=${currentUser?.email}`).then((res) => {
      setCartItems(res?.data);
    });
  }, [currentUser?.email]);

  const handleDeleteFromCart = (_id) => {
    axiosPublic.delete(`/delete/${_id}`).then((res) => {
      console.log(res.data);
      if (res?.data?.deletedCount > 0) {
        const newCartData = cartItems.filter((one) => one?._id != _id);
        setCart(newCartData);
        setCartItems(newCartData);
      }
    });
  };

  const totalPay = cartItems.reduce((total, currentItem) => {
    return total + currentItem.Price * currentItem.quntity;
  }, 0);

  return (
    <div className="px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
      <div className="col-span-2">
        <div className="w-full hidden md:block">
          <table className="border w-full">
            <thead className="">
              <tr className="bg-[#f6f6f6]">
                <th className="py-3">Remove</th>
                <th className="py-3">Image</th>
                <th className="py-3">Product(s)</th>
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
                  handleDeleteFromCart={handleDeleteFromCart}></CartItemTable>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* single card */}
          {cartItems.map((oneCartData) => (
            <CartItemsCard
              key={oneCartData._id}
              oneCartData={oneCartData}
              handleDeleteFromCart={handleDeleteFromCart}></CartItemsCard>
          ))}
        </div>
      </div>

      {/* pay slip */}
      <div className="">
        <div className="bg-[#f6f6f6] p-5 space-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
