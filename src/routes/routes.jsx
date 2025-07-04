import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "../pages/auth/Login";
import SignupPage from "../pages/auth/Signup";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/NotFoundPage";
import DefaultLayout from "../layouts/DefaultLayout";
import LandingPage from "../pages/user/Landing";
import Mcqs from "../pages/quiz/mcqs";
import ResultCard from "../components/ResultCard";

const isAuthenticated = () => !!localStorage.getItem("token");

export const AUTH_ROUTES = [
  {
    name: "Login",
    path: "/login",
    element: <LoginPage />,
  },
  {
    name: "Signup",
    path: "/signup",
    element: <SignupPage />,
  },
];

export const COMMON_ROUTES = [
  {
    name: "Home",
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        name: "RootPage",
        path: "",
        element: !isAuthenticated() ? <LandingPage /> : <HomePage />,
      },
      // Add more child routes here
      {
        name: "Mcqs",
        path: "/mcqs",
        element: <Mcqs />,
      },
      {
        name: "ResultCard",
        path: "/result-card",
        element: <ResultCard />,
      },
    ],
  },
  {
    name: "NotFound",
    path: "*",
    element: <NotFoundPage />,
  },
];

export const ROUTES = [...AUTH_ROUTES, ...COMMON_ROUTES];
export const router = createBrowserRouter(ROUTES);
