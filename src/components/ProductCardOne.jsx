import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import PropTypes from "prop-types";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// toast
import "react-toastify/dist/ReactToastify.css";
import useCart from "../Hooks/useCart";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCardOne = ({ oneData }) => {
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const { cart, setCart } = useCart();

  const navigate = useNavigate();

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

    const adminOrUser = await axiosPublic.get(
      `/getUser?email=${currentUser?.email}`
    );
    console.log(adminOrUser?.data?.userRole);
    if (adminOrUser?.data?.userRole == "admin") {
      return Swal.fire({
        title: "warning",
        text: "admin Can't buy any items..",
        icon: "warning",
      });
    } else if (adminOrUser?.data?.userRole == "user") {
      return axiosPublic.post("/addToCart", addCart).then((res) => {
        if (res.data.acknowledged) {
          const newCart = [...cart, addCart];
          setCart(newCart);
          alert("item add to cart");
        }
      });
    } else {
      navigate("/logIn");
    }
  };

  return (
    <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
      <div className="flex-1 h-full w-full overflow-hidden ">
        <Link to={`/productDetails/${_id}`}>
          <img
            src={`${PropertieImage}`}
            alt=""
            className="h-full w-full object-cover hover:scale-125 transition ease-in-out duration-1000"
          />
        </Link>
      </div>
      {/* card body  */}
      <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
        <Link to={`/productDetails/${_id}`}>
          <h3 className="text-lg">{productName}</h3>
        </Link>
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
            className="btn  rounded-none uppercase flex justify-center items-center  text-sm text-center cursor-pointer border bg-white"
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
