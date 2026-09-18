import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import HomePage from "../pages/home";
import FavoritePage from "../pages/FavoritePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
