import { Link } from "react-router-dom";
import { ImStack } from "react-icons/im";

const Home = () => {
  return (
    <div className="my-5 px-5 lg:px-20">
      {/* =================================== banner section ==================================== */}
      <section className=" md:h-[400px] md:flex  justify-between gap-3 items-center  p-5 bg-[#f6f6f6]">
        {/* main banner  */}
        <div className="flex-1 h-full mb-3 md:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
            className="h-[100%] w-full object-fill "
            alt=""
          />
        </div>
        {/* sub banner  */}
        <div className="flex-1 h-full flex flex-col gap-3">
          {/* sub banner part 1  */}
          <div className="flex-1 0 h-full w-full flex justify-between items-center gap-3">
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
          </div>
          {/* sub banner part 2   */}
          <div className="flex-1  h-full w-full flex justify-between items-center gap-3">
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
            <div className="flex-1  w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JG1mIrN-IaHg8wKfjekewUU5wuMD2wO7XtKQEZgxjQ&s"
                className="h-[100%] w-full "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* categoris section  */}
      <section className="mt-5">
        <h2 className="text-3xl font-semibold mb-5 uppercase hidden lg:block text-green-500">
          Browse By categories
        </h2>
        <div className="lg:grid hidden gap-5 lg:grid-cols-4">
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://media.istockphoto.com/id/478663945/photo/seafood-on-ice.jpg?s=612x612&w=0&k=20&c=6IATPRCmg8T0k0cdwI98xqOZS6-P1swI39RrHLiWxW4="
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              FISH
            </div>
          </div>
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://t3.ftcdn.net/jpg/02/26/53/80/360_F_226538033_C42p96JDNwkSdQs86Agxd1TtaVJsyJ71.jpg"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              MEAT
            </div>
          </div>
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/fresh-fruits-royalty-free-image-1648833703.jpg?crop=1xw:0.39237xh;center,top&resize=1200:*"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold">
              FRUITS
            </div>
          </div>
          <div className=" rounded-md bg-[#f6f6f6] relative h-[100px]">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
              className="h-[100%] w-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute top-0 left-0 rounded-md bg-black text-white bg-opacity-75 h-full w-full flex justify-center items-center text-3xl font-semibold uppercase">
              Vegetables
            </div>
          </div>
        </div>
      </section>
      {/* fruits section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            Fruits
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            seasonal fruits
          </h2>
        </div>
        <div className="flex justify-between items-center xl:h-[400px]  gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
        </Link>
      </section>
      {/* vegetables section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            vegetables
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            fresh vegetables
          </h2>
        </div>
        <div className="flex justify-between items-center xl:h-[400px]  gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
        </Link>
      </section>
      {/* Fish section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            Fish
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            Fresh Fish
          </h2>
        </div>
        <div className="flex justify-between items-center xl:h-[400px]  gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
        </Link>
      </section>
      {/* vegetables section */}
      <section className="p-5 mt-5 bg-[#f6f6f6] relative">
        {/* section heading */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-medium text-green-500 uppercase ">
            Meat
          </h2>
          <h2 className="text-lg font-semibold text-green-500 uppercase flex-1 sm:flex justify-center items-center hidden">
            Fresh & processed meat
          </h2>
        </div>
        <div className="flex justify-between items-center xl:h-[400px]  gap-5">
          <div className="h-full hidden xl:block">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
              className="h-[100%] max-w-[300px] object-cover"
              alt=""
            />
          </div>
          <div className="flex-1 h-full w-full">
            <div className="h-full w-full  grid xl:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* single product card */}
              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>

              <div className=" w-full  rounded-sm flex justify-center items-center p-3 gap-2 bg-white flex-col sm:flex-row">
                <div className="flex-1 h-full w-full">
                  <img
                    src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* card body  */}
                <div className="flex-1 h-full w-full gap-1 flex flex-col justify-between ">
                  <h3 className="text-lg">
                    Black Plum (kalo jam) 500<sub>gm</sub>
                  </h3>
                  <p className="text-lg font-bold text-green-400">80.00 tk</p>
                  <div className="flex justify-between items-center bg-slate-300">
                    <div className="flex justify-between items-center gap-2 border p-1 w-full">
                      <div className="flex-1 flex justify-center items-center text-lg">
                        1
                      </div>
                      <div className=" flex-1 flex justify-center items-center  gap-2">
                        <div className=" border px-2 rounded-md font-bold">
                          +
                        </div>
                        <div className=" border px-2 rounded-md font-bold">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase border p-2 rounded-md text-sm text-center">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* see all button  */}
        <Link className="uppercase px-5 py-2 text-lg font-bold text-white bg-[#30985b] inline-block mt-5  xl:absolute bottom-0 left-0">
          <span className="flex justify-start gap-2 items-center">
            <ImStack /> See All Product
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
