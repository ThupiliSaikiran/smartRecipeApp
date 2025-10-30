import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setShowFeatured }) => {
  let [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setShowFeatured(true);
    navigate("/"); // go home
  };
  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl max-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">🍳 Recipe Finder</h1>

        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          <li
            className="hover:text-orange-500 cursor-pointer"
            onClick={handleHomeClick}
          >
            Home
          </li>
          <li className="hover:text-orange-500 cursor-pointer ">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#About">About</a>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-200 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">
            <li
              className="hover:text-orange-500 
             
              cursor-pointer"
              onClick={() => {
                handleHomeClick();
                setMenuOpen(false);
              }}
            >
              Home
            </li>
            <li className="hover:text-orange-500 

            cursor-pointer" onClick={() => {

                setMenuOpen(false);
              }}>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <a href="#About">About</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
