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
import AdminPrivertRoute from "../privatRoute/AdminPrivertRoute";

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
      // payment and priver api
      {
        path: "/payment",
        element: (
          <PrivatRoute>
            <PaymentForm></PaymentForm>
          </PrivatRoute>
        ),
      },
      {
        path: "/paymentSuccess/:trans_id",
        element: (
          <PrivatRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivatRoute>
        ),
      },
      {
        path: "/paymentFail",
        element: (
          <PrivatRoute>
            <PaymentFail></PaymentFail>
          </PrivatRoute>
        ),
      },
      // =====================================
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
            element: (
              <PrivatRoute>
                <UserAceount></UserAceount>
              </PrivatRoute>
            ),
          },
          {
            path: "adminDashbord",
            element: (
              <AdminPrivertRoute>
                <AdminDashbord></AdminDashbord>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "manageUser",
            element: (
              <AdminPrivertRoute>
                <ManageUser></ManageUser>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "addProduct",
            element: (
              <AdminPrivertRoute>
                <AddProduct></AddProduct>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "settings",
            element: (
              <AdminPrivertRoute>
                <Settings></Settings>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "message",
            element: (
              <AdminPrivertRoute>
                <Message></Message>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "subscriber",
            element: (
              <AdminPrivertRoute>
                <Subscribers></Subscribers>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "Transaction",
            element: (
              <PrivatRoute>
                <Transaction></Transaction>
              </PrivatRoute>
            ),
          },
          {
            path: "Orders",
            element: (
              <PrivatRoute>
                <Orders></Orders>
              </PrivatRoute>
            ),
          },
          {
            path: "Promote",
            element: (
              <AdminPrivertRoute>
                <Promote></Promote>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "UpdateProduct",
            element: (
              <AdminPrivertRoute>
                <UpdateProduct></UpdateProduct>
              </AdminPrivertRoute>
            ),
          },
          {
            path: "updateForm/:_id",
            element: (
              <AdminPrivertRoute>
                <UpdateForm></UpdateForm>
              </AdminPrivertRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/forUpdate/${params._id}`),
          },

          // userRoute
          {
            path: "userDeshbord",
            element: (
              <PrivatRoute>
                <UserDeshbord></UserDeshbord>
              </PrivatRoute>
            ),
          },
          {
            path: "order",
            element: (
              <PrivatRoute>
                <Orders></Orders>
              </PrivatRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default Router;
