import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MealDetails from "../pages/MealDetails/MealDetails";

import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import RequestedMeals from "../pages/Dashboard/RequestedMeals/RequestedMeals";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/meal/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meal/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //  users route
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "requestedMeals",
        element: <RequestedMeals></RequestedMeals>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      // admin route
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
