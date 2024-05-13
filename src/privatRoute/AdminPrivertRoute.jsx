import React, { useContext, useEffect, useState } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const AdminPrivertRoute = ({ children }) => {
  const [isAdmin, setAdmin] = useState({});
  const [loading, setLoading] = useState(true);

  const { signOutuser, currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/getUser/${currentUser?.email}`).then((res) => {
      setAdmin(res?.data);
      setLoading(false);
    });
  }, [axiosPublic, currentUser?.email]);

  if (loading) {
    return;
  } else if (isAdmin?.userRole == "admin") {
    return children;
  } else {
    signOutuser();
  }
};

export default AdminPrivertRoute;
