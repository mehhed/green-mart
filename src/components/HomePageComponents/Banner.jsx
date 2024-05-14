import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PropTypes from "prop-types";

const Banner = ({ banners }) => {
  const axiosPublic = useAxiosPublic();

  // banner related useState
  // main banner
  const [mainBanner, setMainBnner] = useState({});
  //  sub banners
  const [subBannerOne, setSubbBannerOne] = useState({});
  const [subBannerTwo, setSubbBannerTwo] = useState({});
  const [subBannerThree, setSubbBannerThree] = useState({});
  const [subBannerFour, setSubbBannerFour] = useState({});

  useEffect(() => {
    // main banner
    const findMainBanner = banners?.find(
      (one) => one?.bannerName == "mainBanner"
    );
    setMainBnner(findMainBanner);
    // sub banner one
    const findsubBannerOne = banners?.find(
      (one) => one?.bannerName == "subBannerOne"
    );
    setSubbBannerOne(findsubBannerOne);
    // sub banner two
    const findsubBannerTwo = banners?.find(
      (one) => one?.bannerName == "subBannerTwo"
    );
    setSubbBannerTwo(findsubBannerTwo);
    // sub banner three
    const findsubBannerThree = banners?.find(
      (one) => one?.bannerName == "subBannerThree"
    );
    setSubbBannerThree(findsubBannerThree);
    // sub banner  four
    const findsubBannerFour = banners?.find(
      (one) => one?.bannerName == "subBannerFour"
    );
    setSubbBannerFour(findsubBannerFour);
  }, [axiosPublic, banners]);
  return (
    <section className=" lg:h-[400px] flex  justify-between gap-3 items-center  p-5 bg-[#f6f6f6] ">
      {/* main banner  */}
      <div className="flex-1 h-full mb-3 md:mb-0">
        <img
          src={mainBanner?.bannerImg}
          className="lg:h-[100%] w-full object-fill "
          alt=""
        />
      </div>
      {/* sub banner  */}
      <div className="flex-1 h-full lg:flex flex-col gap-3 hidden">
        {/* sub banner part 1  */}
        <div className="flex-1 0 h-full w-full flex justify-between items-center gap-3">
          <div className="flex-1  w-full h-full">
            <img
              src={subBannerOne?.bannerImg}
              className="h-[174px] w-full "
              alt=""
            />
          </div>
          <div className="flex-1  w-full h-full">
            <img
              src={subBannerTwo?.bannerImg}
              className="h-[174px] w-full "
              alt=""
            />
          </div>
        </div>
        {/* sub banner part 2   */}
        <div className="flex-1  h-full w-full flex justify-between items-center gap-3">
          <div className="flex-1  w-full h-full">
            <img
              src={subBannerThree?.bannerImg}
              className="h-[174px] w-full "
              alt=""
            />
          </div>
          <div className="flex-1  w-full h-full">
            <img
              src={subBannerFour?.bannerImg}
              className="h-[174px] w-full "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
Banner.propTypes = {
  banners: PropTypes.array,
};
