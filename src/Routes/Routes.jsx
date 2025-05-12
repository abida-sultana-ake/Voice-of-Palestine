import { createBrowserRouter } from "react-router";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import FQ from "../Pages/F&Q/FQ";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import StoryDetails from "../Pages/Home/StoryDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/fq",
        element: <FQ />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/StoryDetails/:id",
        element: <StoryDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
