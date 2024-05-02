import React from "react";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

const CartItemsCard = ({ oneCartData }) => {
  const { _id, id, productName, PropertieImage, quntity, Price } = oneCartData;
  return (
    <div className="border ">
      <div className="bg-[#f6f6f6] flex justify-start items-center gap-3 border-b p-3">
        <img src={PropertieImage} className="max-w-[50px]" alt="" />
        <p>{productName}</p>
      </div>
      <div className="flex justify-between items-center gap-3 mt-3 p-3">
        <button className="btn rounded-none">
          <MdDelete></MdDelete>
        </button>
        <div>
          <p>Quntity : {quntity}</p>
          <p>Price : {Price}৳</p>
          <p>Total Price : {Price * quntity}৳</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
CartItemsCard.propTypes = {
  oneCartData: PropTypes.object,
};
