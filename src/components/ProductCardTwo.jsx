import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import PropTypes from "prop-types";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const ProductCardTwo = ({ oneProduct }) => {
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);
  // quntity controler for add to cart
  const [quntity, setQuntity] = useState(1);
  const plusQuntity = () => {
    setQuntity(quntity + 1);
  };
  const mainusQuntity = () => {
    if (quntity > 1) {
      setQuntity(quntity - 1);
    }
  };

  // product data
  const { _id, productName, PropertieImage, Price, productCategories } =
    oneProduct;

  const handleAddToCart = async () => {
    const addCart = {
      id: _id,
      BuyerEmail: currentUser?.email,
      productName,
      PropertieImage,
      quntity,
      productCategories,
      Price,
    };

    const adminOrUser = await axiosPublic.get(`/getUser/${currentUser?.email}`);
    console.log(adminOrUser?.data?.userRole);
    if (adminOrUser?.data?.userRole == "admin") {
      return alert("Admin cant't buy any item");
    } else if (adminOrUser?.data?.userRole == "user") {
      return axiosPublic.post("/addToCart", addCart).then((res) => {
        if (res.data.acknowledged) {
          alert("item add to cart");
        }
      });
    } else {
      alert("someting wrong");
    }
  };
  return (
    <div className="min-h-[300px]  flex flex-col border rounded-md">
      {/* product img */}
      <img className=" h-[200px] mx-auto" src={PropertieImage} alt="" />
      {/* product body */}
      <div className="flex-1 p-2 flex flex-col justify-between">
        <h3 className="text-center text-lg font-semibold text-gray-500">
          {productName}
        </h3>
        <p className="text-green-500 text-center text-2xl">
          {Price}
          <sub>tk</sub>
        </p>
        <div className="flex justify-between items-center gap-2 ">
          <div className="flex justify-between items-center gap-2 border p-1">
            <div className="flex-1 flex justify-center items-center px-2 text-lg">
              {quntity}
            </div>
            <div className=" flex flex-col justify-center items-center  gap-1">
              <button
                className="btn btn-xs border p-1 rounded-md font-bold cursor-pointer "
                onClick={mainusQuntity}>
                <GoDash></GoDash>
              </button>
              <button
                className="btn btn-xs border p-1 rounded-md font-bold cursor-pointer "
                onClick={plusQuntity}>
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="flex-1 h-full">
            <div
              onClick={handleAddToCart}
              className="btn  rounded-none uppercase flex justify-center items-center h-full  text-sm text-center cursor-pointer  ">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;

ProductCardTwo.propTypes = {
  oneProduct: PropTypes.object,
};
