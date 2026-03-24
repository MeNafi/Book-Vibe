import React from "react";
import { Link, NavLink } from "react-router-dom"; // Using NavLink for active link styling

const Navbar = () => {
  // Navigation links defined as a constant to reuse in mobile and desktop menus
  const links = (
    <>
      <li>
        <NavLink 
          to="/" 
          // Applies active style if the current route matches 'to'
          className={({ isActive }) => 
            isActive 
            ? "btn btn-outline btn-success font-bold normal-case px-5 mx-2" 
            : "font-medium normal-case px-5 mx-2 text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/listed-books" 
          className={({ isActive }) => 
            isActive 
            ? "btn btn-outline btn-success font-bold normal-case px-5 mx-2" 
            : "font-medium normal-case px-5 mx-2 text-gray-600"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/pages-to-read" 
          className={({ isActive }) => 
            isActive 
            ? "btn btn-outline btn-success font-bold normal-case px-5 mx-2" 
            : "font-medium normal-case px-5 mx-2 text-gray-600"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto py-4">
      {/* Left side: Mobile menu and Brand Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">Book Vibe</Link>
      </div>

      {/* Center: Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Right side: Action Buttons with specific hex colors */}
      <div className="navbar-end gap-3">
        {/* Green Sign In Button */}
        <button className="btn bg-[#23BE0A] text-white hover:bg-[#1fa308] border-none px-6 font-semibold">
          Sign In
        </button>
        {/* Light Blue Sign Up Button */}
        <button className="btn bg-[#59C6D2] text-white hover:bg-[#49b1bc] border-none px-6 font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;