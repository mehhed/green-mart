import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const returner = { cart, setCart };
  return returner;
};

export default useCart;
