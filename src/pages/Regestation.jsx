import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase.init";
import Swal from "sweetalert2";

// sweet alert

const Regestation = () => {
  const navigate = useNavigate();

  // error massage for password
  const [errorInPassword, setError] = useState("");

  const auth = getAuth(app);
  const { signUP } = useContext(AuthProvider);

  // password chacker variabel
  const specialCharacterChacker = /[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,.?~\\]/;
  const uppercaseChaceker = /[A-Z]/;

  // new user create function
  const handleRegestation = (e) => {
    e.preventDefault();
    console.log(signUP);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.Name.value;

    if (password.length < 6) {
      setError("password must be six carecters");
      return;
    } else if (!uppercaseChaceker.test(password)) {
      setError("password must have a uppercase Character");
      return;
    } else if (!specialCharacterChacker.test(password)) {
      setError("password must have a special Character");
      return;
    } else {
      // create user by email password
      signUP(email, password)
        .then(() => {
          // notification after aceount create
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          // update user profile after aceount crate
          updateProfile(auth.currentUser, {
            displayName: name,
          });

          // navigate to login page after aceount created successfully
          navigate("/logIn");
        })
        .catch((error) => {
          console.log(error);
          alert("khaise error");
        });
    }
  };
  return (
    <>
      <div className="w-full md:py-10 py-5 px-5 md:px-10 mx-auto">
        <h2 className="text-center md:text-4xl text-2xl uppercase font-semibold mb-5 bg-[#f6f6f6] md:py-5 py-3">
          Sign up
        </h2>
        <div className="grid grid-cols-1 md:flex justify-center items-center ">
          <div className="flex-1">
            <img
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/Screenshot%202024-04-24%20214015.png"
              alt=""
              className="mx-auto"
            />
          </div>
          <div className="flex-1">
            <form
              onSubmit={handleRegestation}
              action=""
              className="border px-5 md:px-10 pt-20 pb-12 flex flex-col gap-2">
              <input
                type="text"
                name="Name"
                required
                id=""
                className="p-2 text-lg border rounded-sm outline-none"
                placeholder="  Name"
              />
              <label htmlFor="photo" className="text-sm">
                Chose your photo
              </label>
              {/* <input
              type="file"
              name=""
              required
              id="photo"
              className="p-2 text-lg border rounded-sm outline-none"
              placeholder="  Photo"
            /> */}
              <input
                type="email"
                name="email"
                required
                id=""
                className="p-2 text-lg border rounded-sm outline-none"
                placeholder="  Email"
              />
              <input
                type="password"
                name="password"
                required
                id=""
                className="p-2 text-lg border rounded-sm outline-none"
                placeholder="  Password"
              />
              {errorInPassword && (
                <p className="text-red-600 text-sm">{errorInPassword}</p>
              )}
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" name="" required id="" />

                  <Link>term and conditions</Link>
                </div>{" "}
                <Link to={"/logIn"}>Log in</Link>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Sign up"
                  className="bg-gray-200 px-4 py-2 mt-5 rounded-md "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regestation;
