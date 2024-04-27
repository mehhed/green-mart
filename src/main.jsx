import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// router provider import
import { RouterProvider } from "react-router-dom";
// import router
import Route from "./routers/Router";
// import authentication componenet
import AuthenticationProvider from "./Authentication/AuthenticationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthenticationProvider>
  </React.StrictMode>
);
