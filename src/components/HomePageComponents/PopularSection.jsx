import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductCardOne from "../ProductCardOne";
import PropTypes from "prop-types";

const PopularSection = ({ populers }) => {
  const [populer, setPopuler] = useState([]);

  useEffect(() => {
    setPopuler(populers);
  }, [populers]);

  return (
    <section className="p-5 mt-5 bg-[#f6f6f6] ">
      <h2 className="lg:text-3xl text-xl font-semibold mb-5 uppercase  text-green-500">
        Popular Products
      </h2>
      {populer?.length ? (
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* single product card */}
          {populer?.map((oneData) => (
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
    </section>
  );
};

export default PopularSection;

PopularSection.propTypes = {
  populers: PropTypes.array,
};
