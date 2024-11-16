// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mycookbook">My Cookbook</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/newrecipe">New Recipe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
