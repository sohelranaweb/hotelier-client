import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";
import useUpcomingMeals from "../../../hooks/useUpcomingMeals";
import { MdNotifications } from "react-icons/md";
const Navbar = () => {
  const [upcomingMeals] = useUpcomingMeals();
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#f62b48] text-white text-lg font-bold"
              : "text-lg font-bold text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/meals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#f62b48] text-white text-lg font-bold"
              : "text-lg font-bold text-white"
          }
        >
          Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#f62b48] text-white text-lg font-bold"
              : "text-lg font-bold text-white"
          }
        >
          <MdNotifications className="text-lg font-bold"></MdNotifications>
          <div className="badge badge-secondary text-lg font-bold">
            +{upcomingMeals.length}
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-[#f62b48] lg:mr-0 mr-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="lg:pl-2" to="/">
            <img src="https://i.ibb.co/HKpN8FJ/footer-logo.webp" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <DropdownMenu></DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
