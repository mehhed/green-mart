import { Link, useNavigate, useNavigation } from "react-router-dom";
import { ImStack } from "react-icons/im";

import useAxiosPublic from "../Hooks/useAxiosPublic";
import ProductCardOne from "../components/ProductCardOne";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);
  // useState for vagetabel
  const [vegetables, setVegetables] = useState([]);
  // useState for fruit
  const [fruit, setFruit] = useState([]);
  // useState for meat
  const [meat, setMeat] = useState([]);
  // useState for fish
  const [fish, setFish] = useState([]);

  // banner related useState
  // main banner
  const [mainBanner, setMainBnner] = useState({});
  //  sub banners
  const [subBannerOne, setSubbBannerOne] = useState({});
  const [subBannerTwo, setSubbBannerTwo] = useState({});
  const [subBannerThree, setSubbBannerThree] = useState({});
  const [subBannerFour, setSubbBannerFour] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // try {
      const vegResponse = await axiosPublic.get(
        "/VEGETABLES?categori=VEGETABLES"
      );
      setVegetables(vegResponse.data);

      const fruitResponse = await axiosPublic.get("/FRUITS?categori=FRUITS");
      setFruit(fruitResponse.data);

      const meatResponse = await axiosPublic.get("/MEAT?categori=MEAT");
      setMeat(meatResponse.data);

      const fishResponse = await axiosPublic.get("/FISH?categori=FISH");
      setFish(fishResponse.data);
    };

    // main banner
    axiosPublic
      .get("/banner?bannerName=mainBanner")
      .then((res) => setMainBnner(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerOne")
      .then((res) => setSubbBannerOne(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerTwo")
      .then((res) => setSubbBannerTwo(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerThree")
      .then((res) => setSubbBannerThree(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerFour")
      .then((res) => setSubbBannerFour(res.data));

    fetchData();
  }, [currentUser?.email]);

  // console.log(fish);
  return (
    <div className="my-5 px-5 lg:px-20">
      {/* =================================== banner section ==================================== */}
      <section className=" lg:h-[400px] lg:flex  justify-between gap-3 items-center  p-5 bg-[#f6f6f6] hidden">
        {/* main banner  */}
        <div className="flex-1 h-full mb-3 md:mb-0">
          <img
            src={mainBanner?.bannerImg}
            className="h-[100%] w-full object-fill "
            alt=""
          />
        </div>
        {/* sub banner  */}
        <div className="flex-1 h-full flex flex-col gap-3">
          {/* sub banner part 1  */}
          <div className="flex-1 0 h-full w-full flex justify-between items-center gap-3">
            <div className="flex-1  w-full h-full">
              <img
                src={subBannerOne?.bannerImg}
                className="h-[174px] w-full "
                alt=""
              />
            </div>
            <div className="flex-1  w-full h-full">
              <img
                src={subBannerTwo?.bannerImg}
                className="h-[174px] w-full "
                alt=""
              />
            </div>
          </div>
          {/* sub banner part 2   */}
          <div className="flex-1  h-full w-full flex justify-between items-center gap-3">
            <div className="flex-1  w-full h-full">
              <img
                src={subBannerThree?.bannerImg}
                className="h-[174px] w-full "
                alt=""
              />
            </div>
            <div className="flex-1  w-full h-full">
              <img
                src={subBannerFour?.bannerImg}
                className="h-[174px] w-full "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* categoris section  */}
      <section className="mt-5">
        <h2 className="text-3xl font-semibold mb-5 uppercase hidden lg:block text-green-500">
          Browse By categories
        </h2>
        <div className="lg:grid hidden gap-5 lg:grid-cols-4">
          <Link to={"/allProduct/FISH"}>
            <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002127_fish_370.png"
                className="h-[100%] w-full object-cover rounded-md"
                alt=""
              />
              <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
                FISH
              </div>
            </div>
          </Link>
          <Link
            to={"/allProduct/MEAT"}
            className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://t3.ftcdn.net/jpg/02/26/53/80/360_F_226538033_C42p96JDNwkSdQs86Agxd1TtaVJsyJ71.jpg"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              MEAT
            </div>
          </Link>
          <Link
            to={"/allProduct/FRUITS"}
            className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002128_fruits_370.png"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              FRUITS
            </div>
          </Link>
          <Link
            to={"/allProduct/VEGETABLES"}
            className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002125_vegetables_370.png"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold uppercase">
              Vegetables
            </div>
          </Link>
        </div>
      </section>
      {/* fruits section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            Fruits
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            seasonal fruits
          </h2>
        </div>
        <div className="flex justify-between items-center   gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002128_fruits_370.png"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            {fruit.length ? (
              <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* single product card */}
                {fruit.map((oneData) => (
                  <ProductCardOne
                    key={oneData?._id}
                    oneData={oneData}></ProductCardOne>
                ))}
              </div>
            ) : (
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/360_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF-removebg-preview.png"
                className="h-full mx-auto"
                alt=""
              />
            )}
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <Link
            to={"/allProduct/FRUITS"}
            className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </Link>
        </Link>
      </section>
      {/* vegetables section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            vegetables
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            fresh vegetables
          </h2>
        </div>
        <div className="flex justify-between items-center   gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002125_vegetables_370.png"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            {vegetables.length ? (
              <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* single product card */}
                {vegetables.map((oneData) => (
                  <ProductCardOne
                    key={oneData?._id}
                    oneData={oneData}></ProductCardOne>
                ))}
              </div>
            ) : (
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/360_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF-removebg-preview.png"
                className="h-full mx-auto"
                alt=""
              />
            )}
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <Link
            to={"/allProduct/VEGETABLES"}
            className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </Link>
        </Link>
      </section>
      {/* Fish section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            Fish
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            Fresh Fish
          </h2>
        </div>
        <div className="flex justify-between items-center   gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002127_fish_370.png"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            {fish.length ? (
              <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* single product card */}
                {fish.map((oneData) => (
                  <ProductCardOne
                    key={oneData?._id}
                    oneData={oneData}></ProductCardOne>
                ))}
              </div>
            ) : (
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/360_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF-removebg-preview.png"
                className="h-full mx-auto"
                alt=""
              />
            )}
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <Link
            to={"/allProduct/FISH"}
            className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </Link>
        </Link>
      </section>
      {/* Meat section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            Meat
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            Fresh & processed meat
          </h2>
        </div>
        <div className="flex justify-between items-center   gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002126_meat_370.png"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            {meat.length ? (
              <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* single product card */}
                {meat.map((oneData) => (
                  <ProductCardOne
                    key={oneData?._id}
                    oneData={oneData}></ProductCardOne>
                ))}
              </div>
            ) : (
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/360_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF-removebg-preview.png"
                className="h-full mx-auto"
                alt=""
              />
            )}
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <Link
            to={"/allProduct/MEAT"}
            className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </Link>
        </Link>
      </section>
    </div>
  );
};

export default Home;
