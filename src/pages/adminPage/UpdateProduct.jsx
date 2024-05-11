import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UpdateOrDeleteCard from "../../components/deshbordComponent/adminComponent/UpdateOrDeleteCard";
import Swal from "sweetalert2";
import useLoading from "../../Hooks/useLoading";

const UpdateProduct = () => {
  const { loading, setLoading } = useLoading();
  const axiosPublic = useAxiosPublic();
  const [produt, setProduct] = useState([]);
  const [showProduct, setShowProduct] = useState([]);

  useEffect(() => {
    axiosPublic
      .get(`http://localhost:5000/allProduct?categories=allProduct`)
      .then((res) => {
        setProduct(res?.data);
        setShowProduct(res?.data);
        setLoading(false);
      });
  }, []);

  const handleSerch = () => {
    const searchData = document.getElementById("search").value;
    console.log(searchData);
    if (searchData) {
      const searchItems = produt.filter((one) =>
        one.productName.toLowerCase().includes(searchData.toLowerCase())
      );
      setShowProduct(searchItems);
    } else {
      setShowProduct(produt);
    }
  };

  const handleDeleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);
        axiosPublic.delete(`/deleteProduct?id=${_id}`).then((res) => {
          if (res?.data) {
            const newProductData = produt.filter((one) => one?._id != _id);
            setProduct(newProductData);
            setShowProduct(newProductData);
            Swal.fire({
              title: "success",
              text: "product has delete.....",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="px-5 lg:ps-0 pr-5">
      <h1 className="text-3xl font-semibold text-center px-5 py-5 mb-2 bg-[#f2f2f2] ">
        For Update or Delete
      </h1>

      <h1 className="text-3xl font-semibold text-center px-5 py-5 mb-2 bg-[#f2f2f2] ">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search "
            id="search"
            onChange={handleSerch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </h1>

      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          {showProduct.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 bg-[#f2f2f2] p-5">
              {showProduct.map((one) => (
                <UpdateOrDeleteCard
                  key={one?._id}
                  cardData={one}
                  handleDeleteProduct={
                    handleDeleteProduct
                  }></UpdateOrDeleteCard>
              ))}
            </div>
          ) : (
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/nodatafound.png"
              className="w-full"
              alt=""
            />
          )}
        </>
      )}
    </div>
  );
};

export default UpdateProduct;
