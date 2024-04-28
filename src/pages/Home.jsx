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
      <section className="p-5 bg-slate-300  mt-5"></section>
    </div>
  );
};

export default Home;
