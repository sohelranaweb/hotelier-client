import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaAd, FaHome, FaUtensils } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdRateReview, MdUpcoming } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* dashboard side bar  */}
      <div className="w-64 min-h-screen pt-6 bg-orange-400 ">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="text-lg">
                <NavLink to="/dashboard/adminProfile">
                  <CgProfile></CgProfile>
                  Admin Profile
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/manageUsers">
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/addMeal">
                  <IoIosAddCircle></IoIosAddCircle>
                  Add Meal
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/allMeals">
                  <FaAd></FaAd>
                  All Meals
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/allReviews">
                  <MdRateReview></MdRateReview>
                  All Reviews
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/serveMeals">
                  <FaUtensils></FaUtensils>
                  Serve Meals
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/upcomingMeals">
                  <MdUpcoming></MdUpcoming>
                  Upcoming Meals
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-lg">
                <NavLink to="/dashboard/myProfile">
                  <CgProfile></CgProfile>
                  My Profile
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/requestedMeals">
                  <FaCodePullRequest></FaCodePullRequest>
                  Requested Meals
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/dashboard/myReviews">
                  <MdRateReview></MdRateReview>
                  My Reviews
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="text-lg">
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content  */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
