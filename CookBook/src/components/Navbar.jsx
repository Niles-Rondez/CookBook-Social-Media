// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-5 bg-michelin h-screen min-w-[200px] w-1/4 max-w-[250px]">
      <ul className="flex flex-col text-white text-2xl">
        <li className="mb-5">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-5">
          <Link to="/mycookbook">My Cookbook</Link>
        </li>
        <li className="mb-5">
          <Link to="/discover">Discover</Link>
        </li>
        <li className="mb-5">
          <Link to="/groups">Groups</Link>
        </li>
        <li className="mb-5">
          <Link to="/newrecipe">New Recipe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
