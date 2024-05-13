import { useContext, useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { FaFacebookSquare, FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { PiPlus } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useCart from "../Hooks/useCart";
import useLoading from "../Hooks/useLoading";
import { FacebookShareButton } from "react-share";
import ProductCardTwo from "../components/ProductCardTwo";

const SingleProduct = () => {
  const { loading, setLoading } = useLoading();
  const param = useParams();
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const currectLocation = window.location.pathname;

  const [recomended, setRecomended] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axiosPublic
      .get(`/signleProduct/${param?._id}`)
      .then((res) => setData(res.data));

    axiosPublic.get(`/recomended`).then((res) => {
      setRecomended(res.data);
      setLoading(false);
    });
  }, [axiosPublic, param?._id, setLoading]);

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
  const { _id, productName, PropertieImage, Price, productCategories } = data;

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
    <div>
      {loading ? (
        <div className="h-[60vh] w-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <section className="lg:px-20 md:px-10 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  src={data?.PropertieImage}
                  alt=""
                  className="mx-auto h-full hover:scale-125 transition ease-in-out duration-1000"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-lg  font-semibold text-gray-500 text-center">
                  {data?.productName}
                </h3>
                <p className="text-2xl text-green-500 font-semibold">
                  {data?.Price}
                  <sub>tk</sub>
                </p>
                <p className="">{data?.productDescription}</p>
                <div className="flex  gap-2 items-center">
                  Share to :
                  <FacebookShareButton url={currectLocation}>
                    <span className=" text-4xl text-blue-500 bg-gray-400">
                      {" "}
                      <FaFacebookSquare></FaFacebookSquare>{" "}
                    </span>
                  </FacebookShareButton>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <div className="border p-5">
                  <div className="grid grid-cols-2">
                    <div className="text-lg font-bold flex justify-center items-center">
                      {quntity}
                    </div>
                    <div>
                      <div
                        onClick={plusQuntity}
                        className="btn bg-white border p-2 roundedsm text-lg font-bold flex justify-center items-center">
                        <PiPlus></PiPlus>
                      </div>
                      <div
                        onClick={mainusQuntity}
                        className="btn bg-white border p-2 roundedsm text-lg font-bold flex justify-center items-center mt-2">
                        <BsDash></BsDash>
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn w-full bg-[#f2f2f2] text-center py-2 cursor-pointer mt-3"
                    onClick={handleAddToCart}>
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </section>
          <section className="px-5 md:px-10 lg:px-20 mt-10">
            <h1 className="text-4xl text-center text-green-500 font-semibold pb-5">
              <span className="border-b-4 border-[#22c55e96] py-1 rounded-2xl px-3">
                Also Bought
              </span>
            </h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {/* product card */}
              {recomended.map((one) => (
                <ProductCardTwo
                  key={one?._id}
                  oneProduct={one}></ProductCardTwo>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
