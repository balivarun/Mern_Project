import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  // Add any props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="navbar bg-base-400 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a href="/">Homepage</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className="btn btn-ghost text-xl">
            daisyUI
          </a>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle"
            aria-label="Search"
          >
            <FaSearch className="h-5 w-5" />
          </button>
          <button
            className="btn btn-ghost btn-circle"
            aria-label="Notifications"
          >
            <div className="indicator">
              <FaBars className="h-5 w-5" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;