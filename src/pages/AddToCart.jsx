import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const AddToCart = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
      <div className="col-span-2">
        <div className="w-full hidden md:block">
          <table className="border w-full ">
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
              <tr className="text-center border-b">
                <td className="py-2">
                  <button className="btn text-lg">
                    <MdDelete></MdDelete>
                  </button>
                </td>
                <td className="py-2">
                  <img
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/Untitled%20design.png"
                    className="max-w-[50px]"
                    alt=""
                  />
                </td>
                <td className="py-2">Bengal Meat Mutton Bone In - 1 kg</td>
                <td className="py-2">1,090.00৳</td>
                <td className="py-2">1</td>
                <td className="py-2">1,090.00৳</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* single card */}
          <div className="border ">
            <div className="bg-[#f6f6f6] flex justify-start items-center gap-3 border-b p-3">
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/Untitled%20design.png"
                className="max-w-[40px]"
                alt=""
              />
              <p>Bengal Meat Mutton Bone In - 1 kg</p>
            </div>
            <div className="flex justify-between items-center gap-3 mt-3 p-3">
              <button className="btn rounded-none">
                <MdDelete></MdDelete>
              </button>
              <div>
                <p>Price : 1055৳</p>
                <p>Total Price : 1055৳</p>
              </div>
            </div>
          </div>
          {/* single card */}
          <div className="border ">
            <div className="bg-[#f6f6f6] flex justify-start items-center gap-3 border-b p-3">
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/Untitled%20design.png"
                className="max-w-[40px]"
                alt=""
              />
              <p>Bengal Meat Mutton Bone In - 1 kg</p>
            </div>
            <div className="flex justify-between items-center gap-3 mt-3 p-3">
              <button className="btn rounded-none">
                <MdDelete></MdDelete>
              </button>
              <div>
                <p>Price : 1055৳</p>
                <p>Total Price : 1055৳</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pay slip */}
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
        <div className="flex-1 flex">
          <input
            className=" border border-[##4db74f] w-full  p-2 text-lg outline-none "
            type="text"
            name=""
            id=""
            placeholder="Discount Code"
          />
          <div className="h-auto  bg-[#4db74f]  cursor-pointer text-white px-3 md:text-lg flex justify-center items-center">
            Apply
          </div>
        </div>
        <div className="flex justify-between items-center text-green-500 text-lg font-semibold">
          <button className="btn bg-[#4db74f] w-full rounded-none text-lg text-white">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
