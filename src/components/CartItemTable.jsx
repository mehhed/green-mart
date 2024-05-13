import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

const CartItemTable = ({ oneCartData, handleDeleteFromCart }) => {
  const { _id, productName, PropertieImage, quntity, Price } = oneCartData;
  return (
    <tr className=" border-b">
      <td className="py-2">
        <button
          className="btn ml-2 text-lg"
          onClick={() => handleDeleteFromCart(_id)}>
          <MdDelete></MdDelete>
        </button>
      </td>
      <td className="py-2">
        <img src={PropertieImage} className="max-w-[50px]" alt="" />
      </td>
      <td className="py-2">{productName}</td>
      <td className="py-2">{Price}.00৳</td>
      <td className="py-2">{quntity}</td>
      <td className="py-2">{Price * quntity}.00৳</td>
    </tr>
  );
};

export default CartItemTable;

CartItemTable.propTypes = {
  oneCartData: PropTypes.object,
  handleDeleteFromCart: PropTypes.func,
};
