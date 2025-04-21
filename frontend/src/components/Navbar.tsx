import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

interface NavbarProps {
  // Add any props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="navbar bg- px-3 py-4 shadow-[0_4px_16px_0_rgba(249,115,22,0.5)]">
        <div className="navbar-start">
        <div  className="text-2xl tracking-wide text-orange-500 hover:text-orange-600">
            Buddy Pizza's
          </div>
        </div>

        <div className="navbar-end flex gap-4">
          {/* Search and Menu buttons moved here */}
          <button
            className="btn btn-ghost btn-circle"
            aria-label="Search"
          >
            <FaSearch className="h-5 w-5" />
          </button>

          <button
            className="btn btn-ghost btn-circle"
            aria-label="Shopping Cart"
          >
            <div className="indicator">
              <FaShoppingCart className="h-5 w-5" />
            </div>
          </button>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle"
              onClick={() => setIsOpen(!isOpen)}
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a href="/">Homepage</a></li>
              <li><a href="/portfolio">Orders</a></li>
              <li><a href="/about">About our Website</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
