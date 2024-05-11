import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UpdateOrDeleteCard = ({ cardData, handleDeleteProduct }) => {
  return (
    <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col xl:flex-row">
      <div className="flex-1 w-full h-full">
        <img
          src={`${cardData?.PropertieImage}`}
          alt=""
          className="h-full  object-cover mx-auto"
        />
      </div>
      {/* card body  */}
      <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
        <h3 className="text-lg">{cardData?.productName}</h3>
        <p className="text-lg font-bold text-green-400">
          {cardData?.Price}.00
          <sub>tk</sub>
        </p>
        <div className="flex justify-around gap-5 items-center">
          <Link
            to={`/Dashbord/updateForm/${cardData?._id}`}
            className="btn btn-xs bg-[#67de80] text-white">
            Update
          </Link>
          <button
            className="btn btn-xs bg-red-400 text-white"
            onClick={() => handleDeleteProduct(cardData?._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrDeleteCard;

UpdateOrDeleteCard.propTypes = {
  cardData: PropTypes.object,
  handleDeleteProduct: PropTypes.func,
};
