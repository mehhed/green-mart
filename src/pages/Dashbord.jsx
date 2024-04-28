import React from "react";
import { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const { signOutuser } = useContext(AuthProvider);
  const navigate = useNavigate();
  // function for signout
  const handleSignOut = () => {
    signOutuser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button className="btn" onClick={handleSignOut}>
        sign out
      </button>
    </div>
  );
};

export default Dashbord;
