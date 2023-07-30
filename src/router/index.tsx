import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import ManagerLayOut from "../layouts/ManagerLayOut";
import QuestionLayOut from "../layouts/QusetionLayOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manager/List";
import Trash from "../pages/manager/Trash";
import Star from "../pages/manager/Star";
import Edit from "../pages/question/Edit";
import Stat from "../pages/question/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "manage",
        element: <ManagerLayOut />,
        children: [
          { path: "list", element: <List /> },
          { path: "star", element: <Star /> },
          { path: "trash", element: <Trash /> },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "question",
    element: <QuestionLayOut />,
    children: [
      { path: "edit/:id", element: <Edit /> },
      { path: "stat/:id", element: <Stat /> },
    ],
  },
]);
export default router;
