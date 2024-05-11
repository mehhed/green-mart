import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PromotePageCard from "../../components/deshbordComponent/adminComponent/PromotePageCard";

const Promote = () => {
  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(true);
  const [promoted, setPromoted] = useState([]);

  const [unPromoted, setUnPromoted] = useState([]);
  const [unPromotedShower, setUnPromotedShower] = useState([]);

  useEffect(() => {
    axiosPublic
      .get(`http://localhost:5000/allProduct?categories=allProduct`)
      .then((res) => {
        if (res.data) {
          const promotedData = res?.data.filter((one) => one?.promote == true);
          setPromoted(promotedData);
          const unPromotedData = res?.data.filter(
            (one) => one?.promote == false
          );
          setUnPromoted(unPromotedData);
          setUnPromotedShower(unPromotedData);
          setLoading(false);
        }
      });
  }, []);

  // serch system
  const handleSerch = () => {
    const searchData = document.getElementById("search").value;
    console.log(searchData);
    if (searchData) {
      const searchItems = unPromoted.filter((one) =>
        one.productName.toLowerCase().includes(searchData.toLowerCase())
      );
      setUnPromotedShower(searchItems);
    } else {
      setUnPromotedShower(unPromoted);
    }
  };

  const handlePromoteItems = (_id, condition) => {
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
        console.log(_id, condition);
        if (promoted.length == 8 && condition == "promote") {
          return Swal.fire({
            title: "error",
            text: "you can't promote getterthen 8 items ",
            icon: "error",
          });
        } else {
          axiosPublic
            .put(`/promote?id=${_id}&condition=${condition}`)
            .then((res) => {
              if (res?.data) {
                if (condition == "promote") {
                  const filteredData = unPromoted.find(
                    (one) => one?._id == _id
                  );
                  filteredData.promote = true;
                  setPromoted([...promoted, filteredData]);
                  //
                  const newUnpromote = unPromoted.filter(
                    (one) => one?._id !== _id
                  );
                  setUnPromoted(newUnpromote);
                  setUnPromotedShower(newUnpromote);
                  Swal.fire({
                    title: "success",
                    text: "Product is promoted now",
                    icon: "success",
                  });
                } else {
                  const removPromote = promoted.find((one) => one?._id == _id);
                  removPromote.promote = false;
                  setUnPromoted([...unPromoted, removPromote]);
                  setUnPromotedShower([...unPromoted, removPromote]);
                  //
                  const newPromote = promoted.filter((one) => one?._id !== _id);
                  setPromoted(newPromote);
                  Swal.fire({
                    title: "success",
                    text: "Unpromoting product is successfull",
                    icon: "success",
                  });
                }
              }
            });
        }
      }
    });
  };

  return (
    <div className="px-5 lg:ps-0 pr-5">
      <section id="promoted">
        <h1 className="text-3xl text-center font-semibold px-5 py-5 mb-2 bg-[#f2f2f2] ">
          All Promoted Items
        </h1>
        <div className="text-3xl font-semibold  px-5 py-5 mb-2 bg-[#f2f2f2] grid grid-cols-1 gap-5 md:grid-cols-2">
          <h1 className="text-lg">
            <a href="#unpromoted" className="btn  bg-green-400 text-white">
              Un promoted items
            </a>
          </h1>
        </div>
        {loading ? (
          <div className="h-[300px] w-full flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div>
            {promoted?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 bg-[#f2f2f2] p-5">
                {promoted.map((one) => (
                  <PromotePageCard
                    key={one?._id}
                    cardData={one}
                    handlePromoteItems={handlePromoteItems}></PromotePageCard>
                ))}
              </div>
            ) : (
              <img
                src="https://raw.githubusercontent.com/mehhed/fakeData/main/nodatafound.png"
                className="w-full"
                alt=""
              />
            )}
          </div>
        )}
      </section>

      <section id="unpromoted">
        <h1 className="text-3xl text-center font-semibold px-5 py-5 my-2  bg-[#f2f2f2] ">
          For promote
        </h1>

        <h1 className="text-3xl font-semibold  px-5 py-5 mb-2 bg-[#f2f2f2] grid grid-cols-1 gap-5 md:grid-cols-2">
          <h1 className="">
            <a
              href="#promoted"
              className="btn  bg-green-400 text-white text-lg">
              Promoted items
            </a>
          </h1>
          <label className="input input-bordered flex items-center gap-2 max-w-[400px] mx-auto md:ms-auto md:me-0">
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
            {unPromotedShower?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 bg-[#f2f2f2] p-5">
                {unPromotedShower.map((one) => (
                  <PromotePageCard
                    key={one?._id}
                    cardData={one}
                    handlePromoteItems={handlePromoteItems}></PromotePageCard>
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
      </section>
    </div>
  );
};

export default Promote;
