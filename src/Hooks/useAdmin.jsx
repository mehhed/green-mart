import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const useAdmin = () => {
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);

  const [admin, setAdmin] = useState({});
  useEffect(() => {
    axiosPublic
      .get(`/getUser/${currentUser?.email}`)
      .then((res) => setAdmin(res?.data));
  }, [currentUser?.email]);
  return admin;
};

export default useAdmin;
