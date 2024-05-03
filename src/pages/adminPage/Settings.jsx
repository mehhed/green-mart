import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Settings = () => {
  const axiosPublic = useAxiosPublic();
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=80d516dd4f6c2aaca07b139f3d55dd7e`;

  // main banner
  const [mainBanner, setMainBnner] = useState({});
  //  sub banners
  const [subBannerOne, setSubbBannerOne] = useState({});
  const [subBannerTwo, setSubbBannerTwo] = useState({});
  const [subBannerThree, setSubbBannerThree] = useState({});
  const [subBannerFour, setSubbBannerFour] = useState({});

  useEffect(() => {
    // main banner
    axiosPublic
      .get("/banner?bannerName=mainBanner")
      .then((res) => setMainBnner(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerOne")
      .then((res) => setSubbBannerOne(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerTwo")
      .then((res) => setSubbBannerTwo(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerThree")
      .then((res) => setSubbBannerThree(res.data));
    // sub banner
    axiosPublic
      .get("/banner?bannerName=subBannerFour")
      .then((res) => setSubbBannerFour(res.data));
  }, []);

  console.log(mainBanner);

  const bannerControler = async (id) => {
    const productImag = document.getElementById(id).files[0];
    // post img to img bb
    const imageFile = { image: productImag };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        bannerName: id,
        bannerImg: res.data.data.display_url,
      };
      //
      const menuRes = await axiosPublic.post("/banner", menuItem);
      if (menuRes?.data?.insertedId) {
        // show success popup
        if (id == "mainBanner") {
          setMainBnner(menuItem);
        }
        // sub banner
        else if (id == "subBannerOne") {
          setSubbBannerOne(menuItem);
        }
        // sub banner
        else if (id == "subBannerTwo") {
          setSubbBannerTwo(menuItem);
        } else if (id == "subBannerThree") {
          setSubbBannerThree(menuItem);
        }
        if (id == "subBannerFour") {
          subBannerFour(menuItem);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  // handleDeleteBanner
  const handleDeleteBanner = (id) => {
    axiosPublic.delete(`/banner?bannerName=${id}`).then((res) => {
      if (res?.data?.acknowledged) {
        if (id == "mainBanner") {
          setMainBnner({});
        }
        // sub banner
        else if (id == "subBannerOne") {
          setSubbBannerOne({});
        }
        // sub banner
        else if (id == "subBannerTwo") {
          setSubbBannerTwo({});
        } else if (id == "subBannerThree") {
          setSubbBannerThree({});
        } else if (id == "subBannerFour") {
          setSubbBannerFour({});
        }
      }
    });
  };

  console.log(mainBanner?.bannerImg);
  return (
    <section className=" md:h-[400px] md:flex  justify-between gap-3 items-center  p-5 bg-[#f6f6f6]">
      {/* main banner  */}
      <div className="flex-1 h-full mb-3 md:mb-0 relative rounded-md border-4 border-green-200">
        {mainBanner?.bannerImg ? (
          <>
            <img
              src={mainBanner?.bannerImg}
              className="h-[100%] w-full object-fill "
              alt=""
            />
            <MdDelete
              onClick={() => handleDeleteBanner("mainBanner")}
              className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                className="max-w-[100px]"
                alt=""
              />
            </div>
            <input
              onChange={() => bannerControler("mainBanner")}
              type="file"
              name=""
              id="mainBanner"
              className="w-full h-full z-10 opacity-0 bg-transparent cursor-pointer"
            />
          </>
        )}
      </div>
      {/* sub banner  */}
      <div className="flex-1 h-full flex flex-col gap-3">
        {/* sub banner part 1  */}
        <div className="flex-1 0 h-full w-full flex justify-between items-center gap-3">
          <div className="flex-1  w-full h-full relative  rounded-md border-4 border-green-200">
            {/* sub banner one  */}
            {subBannerOne?.bannerImg ? (
              <>
                <img
                  src={subBannerOne?.bannerImg}
                  className=" w-full h-[167px] "
                  alt=""
                />
                <MdDelete
                  onClick={() => handleDeleteBanner("subBannerOne")}
                  className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                    className="max-w-[100px]"
                    alt=""
                  />
                </div>
                <input
                  onChange={() => bannerControler("subBannerOne")}
                  type="file"
                  name=""
                  id="subBannerOne"
                  className="w-full h-full z-10 opacity-0 bg-transparent cursor-pointer"
                />
              </>
            )}
          </div>
          <div className="flex-1  w-full h-full relative  rounded-md border-4 border-green-200">
            {/* sub banner two  */}
            {subBannerTwo?.bannerImg ? (
              <>
                <img
                  src={subBannerTwo?.bannerImg}
                  className=" w-full h-[167px] "
                  alt=""
                />
                <MdDelete
                  onClick={() => handleDeleteBanner("subBannerTwo")}
                  className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                    className="max-w-[100px]"
                    alt=""
                  />
                </div>
                <input
                  onChange={() => bannerControler("subBannerTwo")}
                  type="file"
                  name=""
                  id="subBannerTwo"
                  className="w-full h-full z-10 opacity-0 bg-transparent cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
        {/* sub banner part 2   */}
        <div className="flex-1  h-full w-full flex justify-between items-center gap-3">
          <div className="flex-1  w-full h-full relative rounded-md border-4 border-green-200">
            {subBannerThree?.bannerImg ? (
              <>
                <img
                  src={subBannerThree?.bannerImg}
                  className=" w-full h-[167px] "
                  alt=""
                />
                <MdDelete
                  onClick={() => handleDeleteBanner("subBannerThree")}
                  className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                    className="max-w-[100px]"
                    alt=""
                  />
                </div>
                <input
                  onChange={() => bannerControler("subBannerThree")}
                  type="file"
                  name=""
                  id="subBannerThree"
                  className="w-full h-full z-10 opacity-0 bg-transparent cursor-pointer"
                />
              </>
            )}
          </div>
          <div className="flex-1  w-full h-full relative rounded-md border-4 border-green-200">
            {subBannerFour?.bannerImg ? (
              <>
                <img
                  src={subBannerFour?.bannerImg}
                  className=" w-full h-[167px] "
                  alt=""
                />
                <MdDelete
                  onClick={() => handleDeleteBanner("subBannerFour")}
                  className="absolute top-2 right-2 text-4xl p-2 bg-gray-300 text-red-500 cursor-pointer"></MdDelete>
              </>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                    className="max-w-[100px]"
                    alt=""
                  />
                </div>
                <input
                  onChange={() => bannerControler("subBannerFour")}
                  type="file"
                  name=""
                  id="subBannerFour"
                  className="w-full h-full z-10 opacity-0 bg-transparent cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
