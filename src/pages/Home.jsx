import { Link } from "react-router-dom";
import Banner from "../components/HomePageComponents/Banner";
import PopularSection from "../components/HomePageComponents/PopularSection";
import FruitsSection from "../components/HomePageComponents/FruitsSection";
import VegetablesSection from "../components/HomePageComponents/VegetablesSection";
import FishSection from "../components/HomePageComponents/FishSection";
import MeatSection from "../components/HomePageComponents/MeatSection";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [allProduct, setAllProduct] = useState({});

  useEffect(() => {
    axiosPublic.get("/HomeProduct").then((res) => {
      setAllProduct(res.data);
    });
  }, [axiosPublic]);

  console.log(" allah thik koira dan ", allProduct);

  return (
    <div className="my-5 px-5 lg:px-20">
      {/* =================================== banner section ==================================== */}
      <Banner></Banner>
      {/* categoris section  */}
      <section className="mt-5">
        <h2 className="lg:text-3xl text-xl font-semibold mb-5 uppercase md:block hidden  text-green-500">
          Browse By categories
        </h2>
        <div className="md:grid hidden gap-5 md:grid-cols-4">
          <Link to={"/allProduct/FISH"}>
            <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002127_fish_370.png"
                className="h-[100%] w-full object-cover rounded-md"
                alt=""
              />
              <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-xl font-semibold">
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
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-xl font-semibold">
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
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-xl font-semibold">
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
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-xl font-semibold uppercase">
              Vegetables
            </div>
          </Link>
        </div>
      </section>
      {/* Popular Products section  */}
      <PopularSection populers={allProduct?.populer}></PopularSection>
      {/* fruits section */}
      <FruitsSection fruits={allProduct?.fruits}></FruitsSection>
      {/* vegetables section */}
      <VegetablesSection vegetable={allProduct?.vegetable}></VegetablesSection>
      {/* Fish section */}
      <FishSection fishes={allProduct?.fish}></FishSection>
      {/* Meat section */}
      <MeatSection meats={allProduct?.meat}></MeatSection>
    </div>
  );
};

export default Home;
