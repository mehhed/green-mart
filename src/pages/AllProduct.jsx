import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ProductCardTwo from "../components/ProductCardTwo";
import useLoading from "../Hooks/useLoading";
const AllProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { loading, setLoading } = useLoading();

  // useState for store all data
  const [data, setData] = useState([]);

  // use state for showing data
  const [allProduct, setAllProduct] = useState([]);
  const param = useParams();

  // maxPrice
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(maxPrice);

  useEffect(() => {
    axiosPublic
      .get(`http://localhost:5000/allProduct?categories=${param._id}`)
      .then((res) => {
        setAllProduct(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param._id]);

  // find maximum Price
  allProduct.forEach((obj) => {
    // Compare the price of each object with the current maximum price
    if (obj.Price > maxPrice) {
      setMaxPrice(obj.Price);
      setMinPrice(obj.Price);
    }
  });

  // find minimum Price
  allProduct.forEach((obj) => {
    // Compare the price of each object with the current maximum price
    if (obj.Price < minPrice) {
      setMinPrice(obj.Price);
    }
  });

  // sorting
  function handlesortIng(requst) {
    if (requst == "lowToHigh") {
      const LowToHighData = allProduct
        .slice()
        .sort((a, b) => a.Price - b.Price);
      setAllProduct(LowToHighData);
      console.log(LowToHighData);
    } else if (requst == "highToLow") {
      const sortedHighToLow = allProduct
        .slice()
        .sort((a, b) => b.Price - a.Price);
      setAllProduct(sortedHighToLow);
    }
  }

  const [displayMaxPrice, setDisplayMaxPrice] = useState(0);
  const [displayMinPrice, setDisplayMinPrice] = useState(0);
  // stored range sorted data
  const [RangeSorted, setRangeSorted] = useState(0);
  // handlePriceRangeSorting
  const handlePriceRangeSorting = () => {
    const minimumPrice = document.getElementById("minimumPrice").value;
    const maximumPrice = document.getElementById("maximumPrice").value;

    setDisplayMaxPrice(maximumPrice);
    setDisplayMinPrice(minimumPrice);

    // sort by price range
    const sort = data.filter(
      (one) => one.Price >= minimumPrice && one.Price <= maximumPrice
    );
    setAllProduct(sort);
    setRangeSorted(sort);
  };

  // sort by categories
  const handleCategoriesSorting = (categories) => {
    const filteredItems = RangeSorted.filter(
      (one) => one.productCategories == categories
    );
    setAllProduct(filteredItems);
    // handlePriceRangeSorting();
  };
  // sort reset function
  const resetSort = () => {
    setAllProduct(data);
  };

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
              <span>Min Price </span>
              <span>{displayMinPrice ? displayMinPrice : minPrice}</span>
            </div>
            <div className="px-3 mt-2">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                onChange={handlePriceRangeSorting}
                id="minimumPrice"
                defaultValue={minPrice}
                className="range range-error"
              />
              <div className="flex justify-between items-center text-gray-600  my-2">
                <span>max Price </span>
                <span>{displayMaxPrice ? displayMaxPrice : maxPrice}</span>
              </div>
              <input
                type="range"
                min={displayMinPrice}
                max={maxPrice}
                defaultValue={maxPrice}
                id="maximumPrice"
                onChange={handlePriceRangeSorting}
                className="range range-error"
              />
            </div>
            {param._id == "allProduct" && (
              <>
                {" "}
                <h1 className="uppercase text-center text-lg font-semibold py-2 bg-[#f6f6f6] text-gray-500">
                  Categories
                </h1>
                <span
                  onClick={() => {
                    handleCategoriesSorting("VEGETABLES");
                  }}
                  className=" border-b px-3 py-3 hover:bg-gray-300 block">
                  Vegetables
                </span>
                <span
                  onClick={() => {
                    handleCategoriesSorting("FISH");
                  }}
                  className=" border-b px-3 py-3 hover:bg-gray-300 block">
                  Fish
                </span>
                <span
                  onClick={() => {
                    handleCategoriesSorting("MEAT");
                  }}
                  className=" border-b px-3 py-3 hover:bg-gray-300 block">
                  Meat
                </span>
                <span
                  onClick={() => {
                    handleCategoriesSorting("FRUITS");
                  }}
                  className=" px-3 py-3 hover:bg-gray-300 block">
                  {" "}
                  Fruits{" "}
                </span>
              </>
            )}
            <h1 className="uppercase text-center text-lg font-semibold py-2 bg-[#f6f6f6] text-gray-500">
              Sort by price
            </h1>
            <div className="grid grid-cols-2 gap-5 text-gray-600 px-3 my-3 ">
              <span
                className="p-2 btn border flex justify-center items-center rounded-sm cursor-pointer"
                onClick={() => handlesortIng("lowToHigh")}>
                Low to Heigh
              </span>
              <span
                className="p-2 btn border flex justify-center items-center rounded-sm cursor-pointer"
                onClick={() => handlesortIng("highToLow")}>
                Heigh to Low{" "}
              </span>
              <span
                className="p-2 btn border flex justify-center items-center rounded-sm cursor-pointer"
                onClick={resetSort}>
                Reset
              </span>
            </div>
          </div>
        </div>
        {/* product section  */}
        <div className="col-span-3">
          {loading ? (
            <div className="h-full w-full flex justify-center items-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : (
            <>
              {" "}
              {allProduct.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {/* product card */}
                  {allProduct.map((oneProduct) => (
                    <ProductCardTwo
                      key={oneProduct?._id}
                      oneProduct={oneProduct}></ProductCardTwo>
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
      </div>
    </div>
  );
};

export default AllProduct;
