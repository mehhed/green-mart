import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCardOne from "../ProductCardOne";
import { Link } from "react-router-dom";
import { ImStack } from "react-icons/im";
import PropTypes from "prop-types";

const FishSection = ({ fishes }) => {
  // useState for fish
  const [fish, setFish] = useState([]);

  useEffect(() => {
    setFish(fishes);
  }, [fishes]);

  return (
    <section className="p-5 mt-5 bg-[#f6f6f6] relative">
      {/* section heading */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="lg:text-3xl text-xl font-medium text-green-500 uppercase ">
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
          {fish?.length ? (
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              {fish?.map((oneData) => (
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
  );
};

export default FishSection;
FishSection.propTypes = {
  fishes: PropTypes.array,
};
