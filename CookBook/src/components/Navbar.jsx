// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-michelin h-screen min-w-[200px] w-1/4 max-w-[250px]">
      <div className="flex text-4xl text-center my-5 justify-center">
        <h1 className="text-flaxwhite">Cook</h1>
        <h1 className="text-sunrise">Book</h1>
      </div>

      <ul className="flex flex-col text-flaxwhite text-2xl w-full items-center justify-center">
        <li className="w-full hover:bg-bloodred transition-all duration-200 ease-in-out">
          <Link to="/" className="block w-full p-3 text-justify">
            Home
          </Link>
        </li>
        <li className="w-full hover:bg-bloodred transition-all duration-200 ease-in-out">
          <Link to="/mycookbook" className="block w-full p-3 text-justify">
            My Cookbook
          </Link>
        </li>
        <li className="w-full hover:bg-bloodred transition-all duration-200 ease-in-out">
          <Link to="/discover" className="block w-full p-3 text-justify">
            Discover
          </Link>
        </li>
        <li className="w-full hover:bg-bloodred transition-all duration-200 ease-in-out">
          <Link to="/groups" className="block w-full p-3 text-justify">
            Groups
          </Link>
        </li>
        <li className="w-full hover:bg-bloodred transition-all duration-200 ease-in-out">
          <Link to="/newrecipe" className="block w-full p-3 text-justify">
            New Recipe
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
