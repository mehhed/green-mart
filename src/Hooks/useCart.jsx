import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);

  useEffect(() => {
    axiosPublic.get(`/allCart?email=${currentUser?.email}`).then((res) => {
      setCart(res?.data);
    });
  }, [currentUser?.email, cart]);

  const returner = { cart, setCart };
  return returner;
};

export default useCart;
