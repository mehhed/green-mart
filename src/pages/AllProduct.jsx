import React from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { Link } from "react-router-dom";

const AllProduct = () => {
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
              <span>45</span>
            </div>
            <div className="px-3 mt-2">
              <input
                type="range"
                min={45}
                max={1000}
                defaultValue={45}
                className="range range-error"
              />
              <div className="flex justify-between items-center text-gray-600  my-2">
                <span>Min Price</span>
                <span>1000</span>
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
              <span className="p-2 border rounded-sm cursor-pointer">
                Low to Heigh
              </span>
              <span className="p-2 border rounded-sm cursor-pointer">
                Heigh to Low{" "}
              </span>
            </div>
          </div>
        </div>
        {/* product section  */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {/* product card */}
            <div className="min-h-[300px]  flex flex-col border rounded-md">
              {/* product img */}
              <img
                className="flex-1 h-full mx-auto"
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/img3.jpg"
                alt=""
              />
              {/* product body */}
              <div className="flex-1 p-2 flex flex-col justify-between">
                <h3 className="text-center text-lg font-semibold text-gray-500">
                  Mango ( Amropali ) - 1 kg
                </h3>
                <p className="text-green-500 text-center text-2xl">
                  80.87<sub>tk</sub>
                </p>
                <div className="flex justify-between items-center gap-2 ">
                  <div className="flex justify-between items-center gap-2 border p-1">
                    <div className="flex-1 flex justify-center items-center px-2 text-lg">
                      1
                    </div>
                    <div className=" flex flex-col justify-center items-center  gap-1">
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <FaPlus />
                      </div>
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <GoDash></GoDash>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-full">
                    <div className=" h-full uppercase border p-2 py-3 rounded-md text-sm text-center">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product card */}
            <div className="min-h-[300px]  flex flex-col border rounded-md">
              {/* product img */}
              <img
                className="flex-1 h-full mx-auto"
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/img3.jpg"
                alt=""
              />
              {/* product body */}
              <div className="flex-1 p-2 flex flex-col justify-between">
                <h3 className="text-center text-lg font-semibold text-gray-500">
                  Mango ( Amropali ) - 1 kg
                </h3>
                <p className="text-green-500 text-center text-2xl">
                  80.87<sub>tk</sub>
                </p>
                <div className="flex justify-between items-center gap-2 ">
                  <div className="flex justify-between items-center gap-2 border p-1">
                    <div className="flex-1 flex justify-center items-center px-2 text-lg">
                      1
                    </div>
                    <div className=" flex flex-col justify-center items-center  gap-1">
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <FaPlus />
                      </div>
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <GoDash></GoDash>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-full">
                    <div className=" h-full uppercase border p-2 py-3 rounded-md text-sm text-center">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product card */}
            <div className="min-h-[300px]  flex flex-col border rounded-md">
              {/* product img */}
              <img
                className="flex-1 h-full mx-auto"
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/img3.jpg"
                alt=""
              />
              {/* product body */}
              <div className="flex-1 p-2 flex flex-col justify-between">
                <h3 className="text-center text-lg font-semibold text-gray-500">
                  Mango ( Amropali ) - 1 kg
                </h3>
                <p className="text-green-500 text-center text-2xl">
                  80.87<sub>tk</sub>
                </p>
                <div className="flex justify-between items-center gap-2 ">
                  <div className="flex justify-between items-center gap-2 border p-1">
                    <div className="flex-1 flex justify-center items-center px-2 text-lg">
                      1
                    </div>
                    <div className=" flex flex-col justify-center items-center  gap-1">
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <FaPlus />
                      </div>
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <GoDash></GoDash>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-full">
                    <div className=" h-full uppercase border p-2 py-3 rounded-md text-sm text-center">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product card */}
            <div className="min-h-[300px]  flex flex-col border rounded-md">
              {/* product img */}
              <img
                className="flex-1 h-full mx-auto"
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/img3.jpg"
                alt=""
              />
              {/* product body */}
              <div className="flex-1 p-2 flex flex-col justify-between">
                <h3 className="text-center text-lg font-semibold text-gray-500">
                  Mango ( Amropali ) - 1 kg
                </h3>
                <p className="text-green-500 text-center text-2xl">
                  80.87<sub>tk</sub>
                </p>
                <div className="flex justify-between items-center gap-2 ">
                  <div className="flex justify-between items-center gap-2 border p-1">
                    <div className="flex-1 flex justify-center items-center px-2 text-lg">
                      1
                    </div>
                    <div className=" flex flex-col justify-center items-center  gap-1">
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <FaPlus />
                      </div>
                      <div className=" border p-1 rounded-md  text-[8px]">
                        <GoDash></GoDash>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-full">
                    <div className=" h-full uppercase border p-2 py-3 rounded-md text-sm text-center">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
