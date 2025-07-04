import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "../pages/auth/Login";
import SignupPage from "../pages/auth/Signup";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/NotFoundPage";
import DefaultLayout from "../layouts/DefaultLayout";

// Example auth check (replace with real logic)
const isAuthenticated = () => !!localStorage.getItem("token");

// Private route wrapper
function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

// Auth routes
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

// Common routes
export const COMMON_ROUTES = [
  {
    name: "Home",
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        name: "HomePage",
        path: "",
        element: <HomePage />,
      },
      // Add more child routes here
      // {
      //   name: "Quiz",
      //   path: "quiz",
      //   element: <QuizPage />,
      // },
    ],
  },
  {
    name: "NotFound",
    path: "*",
    element: <NotFoundPage />,
  },
];

// Combine all routes
export const ROUTES = [...AUTH_ROUTES, ...COMMON_ROUTES];

// Correct usage: pass the array directly
export const router = createBrowserRouter(ROUTES);