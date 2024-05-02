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
import ManageUser from "../pages/adminPage/ManageUser";
import AddProduct from "../pages/adminPage/AddProduct";
import Settings from "../components/deshbordComponent/adminComponent/Settings";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allProduct?categories=${params._id}`),
      },
      {
        path: "/productDetails/:_id",
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: "/addToCartPage",
        element: (
          <PrivatRoute>
            <AddToCart></AddToCart>
          </PrivatRoute>
        ),
      },
      {
        path: "/Dashbord",
        element: (
          <PrivatRoute>
            <Dashbord></Dashbord>
          </PrivatRoute>
        ),
        children: [
          // admin route
          {
            path: "Dashbord",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "adminHome",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "manageUser",
            element: <ManageUser></ManageUser>,
          },
          {
            path: "addProduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "settings",
            element: <Settings></Settings>,
          },
        ],
      },
    ],
  },
]);

export default Router;
