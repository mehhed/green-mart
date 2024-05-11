import PropTypes from "prop-types";
import { FcAdvertising } from "react-icons/fc";
import { Link } from "react-router-dom";

const PromotePageCard = ({ cardData, handlePromoteItems }) => {
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
        <div className="flex justify-center items-center">
          {cardData.promote == false ? (
            <button
              className="btn w-full bg-green-400 text-white btn-sm"
              onClick={() => handlePromoteItems(cardData?._id, "promote")}>
              <FcAdvertising className="text-xl"></FcAdvertising> Promote
            </button>
          ) : (
            <button
              className="btn w-full bg-red-400 text-white btn-sm"
              onClick={() => handlePromoteItems(cardData?._id, "UnPromote")}>
              Un Promote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotePageCard;

PromotePageCard.propTypes = {
  cardData: PropTypes.object,
  handlePromoteItems: PropTypes.func,
};
