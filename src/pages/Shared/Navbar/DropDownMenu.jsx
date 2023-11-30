import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { user, logOut } = useAuth();
  // console.log(user);
  const [isAdmin] = useAdmin();
  return (
    <div className="relative">
      <div className=" cursor-pointer lg:pr-4 pr-12" onClick={toggleDropdown}>
        {user ? (
          <>
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user.photoURL}
              alt="profile"
              height="30"
              width="30"
            />
          </>
        ) : (
          <>
            <p className="text-lg font-bold text-white">Join Us</p>
          </>
        )}
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col">
            {user ? (
              <>
                <p className="px-4 py-3 hover:bg-neutral-100 transition font-semibold ">
                  {user.displayName}
                </p>

                {user && isAdmin && (
                  <li>
                    <Link to="/dashboard/adminProfile">Dashboard</Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li>
                    <Link to="/dashboard/myProfile">Dashboard</Link>
                  </li>
                )}
                {/* <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link> */}
                <Link
                  onClick={logOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
