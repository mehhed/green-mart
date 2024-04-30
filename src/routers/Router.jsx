import { createBrowserRouter } from "react-router-dom";
//  root folder imported here
import RooteHome from "../rootFolder/RooteHome";
// pages
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Regestation from "../pages/Regestation";
import PrivatRoute from "../privatRoute/PrivatRoute";
import Dashbord from "../pages/Dashbord";
import AllProduct from "../pages/AllProduct";
import SingleProduct from "../pages/SingleProduct";
import AddToCart from "../pages/AddToCart";
import AdminHome from "../pages/adminPage/AdminHome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RooteHome></RooteHome>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <Regestation></Regestation>,
      },
      {
        path: "/allProduct/:_id",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/productDetails/:_id",
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: "/addToCart/:_id",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/Dashbord",
        element: (
          <PrivatRoute>
            <Dashbord></Dashbord>
          </PrivatRoute>
        ),
        children: [
          {
            path: "Dashbord",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "adminHome",
            element: <AdminHome></AdminHome>,
          },
        ],
      },
    ],
  },
]);

export default Router;
