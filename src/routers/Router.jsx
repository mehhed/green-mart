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
import ManageUser from "../pages/adminPage/ManageUser";
import AddProduct from "../pages/adminPage/AddProduct";
import Settings from "../pages/adminPage/Settings";
import Contact from "../pages/Contact";
import AdminDashbord from "../pages/adminPage/AdminDashbord";
import UserAceount from "../pages/UserAceount";
import UserDeshbord from "../pages/userPage/UserDeshbord";
import Message from "../pages/adminPage/Message";
import MyOrder from "../pages/userPage/MyOrder";

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
        path: "/contact",
        element: <Contact></Contact>,
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
            path: "/Dashbord",
            element: <UserAceount></UserAceount>,
          },
          {
            path: "adminDashbord",
            element: <AdminDashbord></AdminDashbord>,
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
          {
            path: "message",
            element: <Message></Message>,
          },

          // userRoute
          {
            path: "userDeshbord",
            element: <UserDeshbord></UserDeshbord>,
          },
          {
            path: "MyOrder",
            element: <MyOrder></MyOrder>,
          },
        ],
      },
    ],
  },
]);

export default Router;
