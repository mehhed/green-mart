import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ProductCardTwo from "../components/ProductCardTwo";

const AllProduct = () => {
  const axiosPublic = useAxiosPublic();

  const [allProduct, setAllProduct] = useState([]);
  const data = useLoaderData();

  // maxPrice
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  useEffect(() => {
    if (data) {
      setAllProduct(data);
      allProduct.forEach((obj) => {
        // Compare the price of each object with the current maximum price
        if (obj.Price > maxPrice) {
          setMaxPrice(obj.Price);
        }
      });
      // for minimum price
      // allProduct.forEach((obj) => {
      //   // Compare the price of each object with the current minmum price
      //   if (obj.Price < minPrice) {
      //     setMinPrice(obj.Price);
      //   }
      // });
    }
  }, [allProduct, axiosPublic, data, maxPrice, minPrice]);

  // sorting
  function handlesortIng(requst) {
    if (requst == "lowToHigh") {
      const LowToHighData = allProduct
        .slice()
        .sort((a, b) => a.minPrice - b.minPrice);
      setAllProduct(LowToHighData);
      console.log(LowToHighData);
    } else if (requst == "highToLow") {
      const sortedHighToLow = allProduct
        .slice()
        .sort((a, b) => b.minPrice - a.minPrice);
      setAllProduct(sortedHighToLow);
    }
  }
  // console.log(minPrice);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:px-20 md:px-10 px-5 mt-5 gap-5">
        {/* filter section  */}
        <div className="hidden lg:block">
          <div className="border">
            <h1 className="uppercase text-center text-lg font-semibold py-2 bg-[#f6f6f6] text-gray-500">
              Price Range
            </h1>
            <div className="flex justify-between items-center text-gray-600 px-3 my-2">
              <span>Min Price</span>
              <span>{minPrice}</span>
            </div>
            <div className="px-3 mt-2">
              <input
                type="range"
                min={45}
                max={maxPrice}
                defaultValue={45}
                className="range range-error"
              />
              <div className="flex justify-between items-center text-gray-600  my-2">
                <span>max Price</span>
                <span>{maxPrice}</span>
              </div>
              <input
                type="range"
                min={0}
                max={1000}
                defaultValue={50}
                className="range range-error"
              />
            </div>
            {/*  */}
            <h1 className="uppercase text-center text-lg font-semibold py-2 bg-[#f6f6f6] text-gray-500">
              Categories
            </h1>
            <Link className="mt-2 px-3 py-1 hover:bg-gray-300 block">
              Vegetables
            </Link>
            <Link className="mt-2 px-3 py-1 hover:bg-gray-300 block">Fish</Link>
            <Link className="mt-2 px-3 py-1 hover:bg-gray-300 block">Meat</Link>
            <Link className="mt-2 px-3 py-1 hover:bg-gray-300 block">
              Fruits
            </Link>
            <h1 className="uppercase text-center text-lg font-semibold py-2 bg-[#f6f6f6] text-gray-500">
              Sort by price
            </h1>
            <div className="flex justify-between items-center text-gray-600 px-3 my-3 ">
              <span
                className="p-2 border rounded-sm cursor-pointer"
                onClick={() => handlesortIng("lowToHigh")}>
                Low to Heigh
              </span>
              <span
                className="p-2 border rounded-sm cursor-pointer"
                onClick={() => handlesortIng("highToLow")}>
                Heigh to Low{" "}
              </span>
            </div>
          </div>
        </div>
        {/* product section  */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {/* product card */}
            {allProduct.map((oneProduct) => (
              <ProductCardTwo
                key={oneProduct?._id}
                oneProduct={oneProduct}></ProductCardTwo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
