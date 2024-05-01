import React from "react";
import { MdDelete } from "react-icons/md";

const Settings = () => {
  return (
    <section className=" md:h-[400px] md:flex  justify-between gap-3 items-center  p-5 bg-[#f6f6f6]">
      {/* main banner  */}
      <div className="flex-1 h-full mb-3 md:mb-0 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
          className="h-[100%] w-full object-fill "
          alt=""
        />
        <MdDelete className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
      </div>
      {/* sub banner  */}
      <div className="flex-1 h-full flex flex-col gap-3">
        {/* sub banner part 1  */}
        <div className="flex-1 0 h-full w-full flex justify-between items-center gap-3">
          <div className="flex-1  w-full h-full relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
              className="h-[100%] w-full "
              alt=""
            />
            <MdDelete className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
          </div>
          <div className="flex-1  w-full h-full relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
              className="h-[100%] w-full "
              alt=""
            />
            <MdDelete className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
          </div>
        </div>
        {/* sub banner part 2   */}
        <div className="flex-1  h-full w-full flex justify-between items-center gap-3">
          <div className="flex-1  w-full h-full relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
              className="h-[100%] w-full "
              alt=""
            />
            <MdDelete className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
          </div>
          <div className="flex-1  w-full h-full relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
              className="h-[100%] w-full "
              alt=""
            />
            <MdDelete className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
