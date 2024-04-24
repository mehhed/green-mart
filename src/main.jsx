import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// router provider import
import { RouterProvider } from "react-router-dom";
// import router
import Route from "./routers/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>
);
