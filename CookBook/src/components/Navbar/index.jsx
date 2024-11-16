import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">CookBook</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/discover" className="hover:underline">
            Discover
          </Link>
          <Link to="/saved" className="hover:underline">
            Saved Recipes
          </Link>
          <Link to="/groups" className="hover:underline">
            Groups
          </Link>
          <Link to="/new-recipe" className="hover:underline">
            New Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
