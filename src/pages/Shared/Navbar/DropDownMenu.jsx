import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className=" cursor-pointer" onClick={toggleDropdown}>
        <p className="text-lg font-bold text-white">Join Us</p>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
