import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import PropTypes from "prop-types";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// toast
import "react-toastify/dist/ReactToastify.css";

const ProductCardOne = ({ oneData }) => {
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();

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
    oneData;

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
    <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
      <div className="flex-1 h-full w-full">
        <img
          src={`${PropertieImage}`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* card body  */}
      <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
        <h3 className="text-lg">{productName}</h3>
        <p className="text-lg font-bold text-green-400">
          {Price}.00
          <sub>tk</sub>
        </p>
        <div className="space-y-2">
          <div className="flex justify-between items-center ">
            <div className="flex justify-between items-center gap-2 border p-1 w-full">
              <div className="flex-1 flex justify-center items-center text-lg">
                {quntity}
              </div>
              <div className=" flex-1 flex justify-center items-center  gap-2">
                {" "}
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
          </div>
          <div
            className="btn  rounded-none uppercase flex justify-center items-center  text-sm text-center cursor-pointer  "
            onClick={handleAddToCart}>
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOne;

ProductCardOne.propTypes = {
  oneData: PropTypes.object,
};
