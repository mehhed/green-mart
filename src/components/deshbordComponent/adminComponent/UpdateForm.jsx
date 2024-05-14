import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateForm = () => {
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate();
  console.log(data);
  const axiosPublic = useAxiosPublic();

  const handeleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = e.target.Name.value;
    const productPrice = e.target.Price.value;
    const productDescription = e.target.discription.value;

    // now send the menu item data to the server with the image url
    const menuItem = {
      _id: data?._id,
      productName,
      productDescription,
      Price: parseInt(productPrice),
    };
    //
    const menuRes = await axiosPublic.put(`/update/${data?._id}`, menuItem);
    if (menuRes?.data) {
      // show success popup
      form.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${productName} update successfull.`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/Dashbord/UpdateProduct");
    }
  };
  return (
    <div className="px-5 lg:ps-0 pr-5">
      <h1 className="text-3xl font-semibold text-center px-5 py-5 mb-2 bg-[#f2f2f2] ">
        Update Product
      </h1>
      <div>
        <form className="border p-5 " onSubmit={handeleAddProduct}>
          <div className="">
            <div>
              <label htmlFor="Name" className="text-lg font-bold">
                Product Name
              </label>
              <input
                type="text"
                name="Name"
                defaultValue={data?.productName}
                id="PropertieTitle"
                className="w-full p-4 border my-2 focus:outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="Price" className="text-lg font-bold">
                Price
              </label>
              <input
                type="number"
                name="Price"
                id="Price"
                className=" w-full p-4 border my-2 focus:outline-none"
                placeholder="Price"
                required
                min={1}
                defaultValue={data?.Price}
              />
            </div>
            <div>
              <label htmlFor="discription" className="text-lg font-bold">
                Discription
              </label>
              <textarea
                required
                defaultValue={data?.productDescription}
                name="discription"
                id="discription"
                cols="30"
                rows="3"
                placeholder="product details...... "
                className="block w-full p-4  border focus:outline-none"></textarea>
            </div>
          </div>
          <div className="w-full mt-5 text-center">
            <button className="btn rounded-none bg-green-500 text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
