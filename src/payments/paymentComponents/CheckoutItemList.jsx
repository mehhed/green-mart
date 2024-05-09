import React from "react";
import PropTypes from "prop-types";

const CheckoutItemList = ({ cartData }) => {
  return (
    <div className="flex justify-around items-center gap-5 mb-5">
      <div className="relative max-w-[100px]">
        <img src={cartData?.PropertieImage} className="w-full" alt="" />
        <span className="rounded-md p-1 absolute top-[-12px] right-[-12px] bg-gray-200 ">
          {" "}
          {cartData?.quntity}
        </span>
      </div>
      <h2 className="text-lg text-gray-600">{cartData?.productName}</h2>
      <span className="text-lg text-gray-600">
        {cartData?.Price * cartData?.quntity} BDT
      </span>
    </div>
  );
};

export default CheckoutItemList;

CheckoutItemList.propTypes = {
  cartData: PropTypes.object,
};
