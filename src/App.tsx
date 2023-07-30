import React from "react";
// import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routerConfig from "./router/index";
import "antd/dist/reset.css";
function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;
