import { createBrowserRouter } from "react-router";
import Error from "../Error/Error";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
]);
