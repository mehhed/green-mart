import { Link } from "react-router-dom";
import { ImStack } from "react-icons/im";

import useAxiosPublic from "../Hooks/useAxiosPublic";
import ProductCardOne from "../components/ProductCardOne";
import { useEffect, useState } from "react";

const Home = () => {
  const axiosPublic = useAxiosPublic();

  // useState for vagetabel
  const [vegetables, setVegetables] = useState([]);

  // useState for fruit
  const [fruit, setFruit] = useState([]);
  // useState for meat
  const [meat, setMeat] = useState([]);
  // useState for fish
  const [fish, setFish] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic, fruit]);

  // console.log(fish);
  return (
    <div className="my-5 px-5 lg:px-20">
      {/* =================================== banner section ==================================== */}
      <section className=" md:h-[400px] md:flex  justify-between gap-3 items-center  p-5 bg-[#f6f6f6]">
        {/* main banner  */}
        <div className="flex-1 h-full mb-3 md:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
          </div>
          {/* sub banner part 2   */}
          <div className="flex-1  h-full w-full flex justify-between items-center gap-3">
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
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
          <Link to={"/allProduct/fish"}>
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
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://t3.ftcdn.net/jpg/02/26/53/80/360_F_226538033_C42p96JDNwkSdQs86Agxd1TtaVJsyJ71.jpg"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              MEAT
            </div>
          </div>
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002128_fruits_370.png"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              FRUITS
            </div>
          </div>
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/0002125_vegetables_370.png"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold uppercase">
              Vegetables
            </div>
          </div>
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
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              {fruit.map((oneData) => (
                <ProductCardOne
                  key={oneData?._id}
                  oneData={oneData}></ProductCardOne>
              ))}
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
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
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              {vegetables.map((oneData) => (
                <ProductCardOne
                  key={oneData?._id}
                  oneData={oneData}></ProductCardOne>
              ))}
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
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
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              {fish.map((oneData) => (
                <ProductCardOne
                  key={oneData?._id}
                  oneData={oneData}></ProductCardOne>
              ))}
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
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
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              {meat.map((oneData) => (
                <ProductCardOne
                  key={oneData?._id}
                  oneData={oneData}></ProductCardOne>
              ))}
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
