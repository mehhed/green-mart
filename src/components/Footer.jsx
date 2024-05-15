import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Footer = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.subscribeEmail.value;
    axiosPublic.post("/subscriber", { email }).then((res) => {
      if (res?.data) {
        Swal.fire({
          icon: "success",
          title: "Thanks for withing us..",
        });
        form.reset();
      }
    });
  };
  return (
    <div className=" border-t-2 mt-10 lg:mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 lg:p-10">
        <div className="col-span-2">
          <Link to={"/"}>
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
              alt=""
            />
          </Link>
          <p className="text-sm text-center">
            DevoTech Technology Park, 4th Floor, House 11, Road 113/A,
            Gulshan-2, Dhaka-1212, Bangladesh
          </p>
          <h2 className="text-center text-lg font-semibold mt-2">
            PARTNERSHIP WITH
          </h2>
          <img
            src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-29%20194314.png"
            className="mx-auto mt-2"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">INFORMATION</h1>
          <Link
            to={"https://maps.app.goo.gl/CvPfsLVyMTYN7xwZ8"}
            className="block p-2 my-1">
            Sitemap
          </Link>
          <Link to={"/contact"} className="block p-2 my-1">
            Contact us
          </Link>
          <Link className="block p-2 my-1">Privacy Policy</Link>
          <Link className="block p-2 my-1">Conditions of Use</Link>
          <Link className="block p-2 my-1">About us</Link>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">MY ACCOUNT</h1>
          <Link to={"/Dashbord"} className="block p-2 my-1">
            My account
          </Link>
          <Link to={"/Dashbord/Orders"} className="block p-2 my-1">
            Orders
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">CUSTOMER SERVICE </h1>
          <Link to={"/addToCartPage"} className="block p-2 my-1">
            My Cart
          </Link>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-bold mb-2">CUSTOMER SERVICE </h1>
          <a href="tel:+8801933995057" className="text-lg text-green-400">
            +8801933995057
          </a>
          <h1 className="text-lg font-bold my-2">NEWSLETTER </h1>
          <form onSubmit={handleSubscribe}>
            <div className="flex-1 flex">
              <input
                className=" border border-[#1c8e4b] w-full rounded-s-lg p-2 text-lg outline-none "
                type="text"
                name=""
                id="subscribeEmail"
                placeholder="Enter your email here....."
              />
              <input
                type="submit"
                value="send"
                className="h-auto  bg-green-600 rounded-e-lg cursor-pointer text-white px-3 font-semibold flex justify-center items-center"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
