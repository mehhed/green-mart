import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import CartItemTable from "../components/CartItemTable";
import CartItemsCard from "../components/CartItemsCard";

const AddToCart = () => {
  // loged in user details
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  // useState for cart items
  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/allCart?email=${currentUser?.email}`).then((res) => {
      setCartItems(res?.data);
      // console.log(res.data);
    });
  }, [axiosPublic, currentUser?.email]);

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
              {CartItems.map((oneCartData) => (
                <CartItemTable
                  key={oneCartData._id}
                  oneCartData={oneCartData}></CartItemTable>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* single card */}
          {CartItems.map((oneCartData) => (
            <CartItemsCard
              key={oneCartData._id}
              oneCartData={oneCartData}></CartItemsCard>
          ))}
        </div>
      </div>
      {/* pay slip */}
      <div className="">
        <div className="bg-[#f6f6f6] p-5 space-y-2">
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p>1,220.00৳</p>
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
            <p>20.00৳</p>
          </div>
          <div className="flex justify-between items-center">
            <p>tax:</p>
            <p>0.00৳</p>
          </div>
          <div className="flex justify-between items-center text-green-500 text-lg font-semibold">
            <p>Total:</p>
            <p>1,220.00৳</p>
          </div>
          <div className="flex justify-between items-center text-green-500 text-lg font-semibold">
            <button className="btn bg-[#4db74f] w-full rounded-none text-lg text-white">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
