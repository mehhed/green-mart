import React from "react";
import { BsDash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { PiPlus } from "react-icons/pi";

const SingleProduct = () => {
  return (
    <div>
      <section className="lg:px-20 md:px-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          <img
            src="https://raw.githubusercontent.com/mehhed/fakeData/main/Untitled%20design.png"
            alt=""
            className="max-h-[400px] mx-auto"
          />
          <div className="flex flex-col ">
            <h3 className="text-lg text-center font-semibold text-gray-500">
              Product Name
            </h3>
            <p className="flex-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              esse sapiente nemo nam corporis quia, beatae necessitatibus neque
              error provident officia quo voluptatum labore, a aliquid eum quae
              molestiae adipisci.
            </p>
            <div>
              <button className="btn">shere</button>
              <button className="btn">shere</button>
              <button className="btn">shere</button>
            </div>
          </div>
          <div>
            <div className="border p-5">
              <p className="text-2xl text-green-500 font-semibold text-center">
                80.80<sub>tk</sub>
              </p>
              <div className="grid grid-cols-2 mt-5">
                <div className="text-lg font-bold flex justify-center items-center">
                  1
                </div>
                <div>
                  <div className=" border p-2 roundedsm text-lg font-bold flex justify-center items-center">
                    <PiPlus></PiPlus>
                  </div>
                  <div className=" border p-2 roundedsm text-lg font-bold flex justify-center items-center mt-2">
                    <BsDash></BsDash>
                  </div>
                </div>
              </div>
              <div className="bg-[#f2f2f2] text-center py-2 cursor-pointer mt-3">
                Add to cart
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section className="px-5 md:px-10 lg:px-20 mt-10">
        <h1 className="text-4xl text-center text-green-500 font-semibold">
          Also Bought
        </h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
          {/*  */}
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
          {/*  */}
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
          {/*  */}
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
          {/*  */}
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
      </section>
    </div>
  );
};

export default SingleProduct;
