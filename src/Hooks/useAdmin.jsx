import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";

const useAdmin = () => {
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    if (currentUser?.email) {
      axiosPublic
        .get(`/getUser?email=${currentUser?.email}`)
        .then((res) => setAdmin(res?.data));
    }
  }, [axiosPublic, currentUser?.email]);

  return admin;
};

export default useAdmin;
