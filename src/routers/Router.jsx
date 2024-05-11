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
import Transaction from "../pages/Transaction";
import Orders from "../pages/Orders";
import Promote from "../pages/adminPage/Promote";
import UpdateProduct from "../pages/adminPage/UpdateProduct";
import PaymentForm from "../payments/PaymentForm";
import PaymentSuccess from "../payments/PaymentSuccess";
import PaymentFail from "../payments/PaymentFail";
import Subscribers from "../pages/adminPage/Subscribers";
import UpdateForm from "../components/deshbordComponent/adminComponent/UpdateForm";

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
        path: "/payment",
        element: <PaymentForm></PaymentForm>,
      },
      {
        path: "/paymentSuccess/:trans_id",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/paymentFail",
        element: <PaymentFail></PaymentFail>,
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
          {
            path: "subscriber",
            element: <Subscribers></Subscribers>,
          },
          {
            path: "Transaction",
            element: <Transaction></Transaction>,
          },
          {
            path: "Orders",
            element: <Orders></Orders>,
          },
          {
            path: "Promote",
            element: <Promote></Promote>,
          },
          {
            path: "UpdateProduct",
            element: <UpdateProduct></UpdateProduct>,
          },
          {
            path: "updateForm/:_id",
            element: <UpdateForm></UpdateForm>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/forUpdate/${params._id}`),
          },

          // userRoute
          {
            path: "userDeshbord",
            element: <UserDeshbord></UserDeshbord>,
          },
          {
            path: "order",
            element: <Orders></Orders>,
          },
        ],
      },
    ],
  },
]);

export default Router;
