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
import AdminRoute from "./AdminRoute";
import Meals from "../pages/Meals/Meals";
import AddMeal from "../pages/Dashboard/AddMeal/AddMeal";
import AllMeals from "../pages/Dashboard/AllMeals/AllMeals";
import AllReviews from "../pages/Dashboard/AllReviews/AllReviews";
import UpdateMeal from "../pages/Dashboard/UpdateMeal/UpdateMeal";
import UpcomingMeals from "../pages/UpcomingMeals/UpcomingMeals";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Checkout/Payment";

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
        path: "meals",
        element: <Meals></Meals>,
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
      {
        path: "/updateMeal/:id",
        element: <UpdateMeal></UpdateMeal>,
      },
      {
        path: "/upcoming-meals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
      {
        path: "/checkout/:package_name",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:package_name",
        element: <Payment></Payment>,
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
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addMeal",
        element: (
          <AdminRoute>
            <AddMeal></AddMeal>
          </AdminRoute>
        ),
      },
      {
        path: "allMeals",
        element: (
          <AdminRoute>
            <AllMeals></AllMeals>
          </AdminRoute>
        ),
      },
      {
        path: "allReviews",
        element: <AllReviews></AllReviews>,
      },
    ],
  },
]);
