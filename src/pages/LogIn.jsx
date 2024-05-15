import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signin, setUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();

  const [loadign, setLoading] = useState(false);
  const [errors, seterror] = useState("");

  // import axios public
  const axiosPublic = useAxiosPublic();

  // function for log in by email password
  const handleLogInWithEmailPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "log in successfull....",
          showConfirmButton: false,
          timer: 1500,
        });
        // user details
        const name = user?.displayName;
        const userEmail = user?.email;
        const userRole = "user";
        const userData = { name, userEmail, userRole };
        axiosPublic.post("/users", userData);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setLoading(false);
        seterror("invalid aceount");
      });
  };

  return (
    <div className="w-full  py-5 px-5 md:px-10 mx-auto">
      <h2 className="text-center md:text-4xl text-2xl uppercase font-semibold mb-5 bg-[#f6f6f6] md:py-5 py-3">
        Log in
      </h2>
      <div className="grid grid-cols-1 md:flex justify-center items-center ">
        <div className="flex-1 hidden md:block">
          <img
            src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleLogInWithEmailPassword}
            action=""
            className="border px-5 md:px-10 pt-20 pb-12 flex flex-col gap-5">
            <span className="text-red-500 text-center">{errors}</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                name="email"
                className="grow"
                required
                placeholder="   Email"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                name="password"
                className="grow"
                required
              />
            </label>
            <div className="flex justify-between items-center">
              <Link>forget password</Link> <Link to={"/signUp"}>Sign up</Link>
            </div>
            <div className="text-center">
              {loadign ? (
                <span className="btn bg-gray-200 px-10  mt-5 rounded-md">
                  <span className="loading loading-spinner loading-xs"></span>
                </span>
              ) : (
                <input
                  type="submit"
                  value="Log in"
                  className="bg-gray-200 px-4 py-2 mt-5 rounded-md "
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
