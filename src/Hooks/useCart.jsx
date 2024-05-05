import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axiosPublic.get(`/allCart?email=${currentUser?.email}`).then((res) => {
      setCart(res?.data);
    });
  }, [currentUser?.email, cart]);

  // console.log(cart.length);

  const returner = { cart, setCart, load };
  return returner;
};

export default useCart;
