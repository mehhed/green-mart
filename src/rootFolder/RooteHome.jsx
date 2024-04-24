import React from "react";
import { Outlet } from "react-router-dom";
const RooteHome = () => {
  return (
    <>
      <h1> navigation heare </h1>
      <Outlet></Outlet>
    </>
  );
};

export default RooteHome;
