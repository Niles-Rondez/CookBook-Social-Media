import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Cookbook", path: "/mycookbook" },
    { name: "Discover", path: "/discover" },
    { name: "Groups", path: "/groups" },
    { name: "New Recipe", path: "/newrecipe" },
  ];

  return (
    <nav className="bg-michelin h-screen w-[250px] fixed top-0 left-0 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="flex text-4xl text-center my-5 justify-center">
          <Link to="/" className="flex">
            <h1 className="text-flaxwhite">Cook</h1>
            <h1 className="text-sunrise">Book</h1>
          </Link>
        </div>

        <ul className="flex flex-col text-flaxwhite text-2xl w-full items-center justify-center">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`px-3 w-full transition-all duration-200 ease-in-out ${
                location.pathname === item.path ? "bg-bloodred" : "hover:bg-bloodred"
              }`}
            >
              <Link
                to={item.path}
                className={`block w-full p-3 text-justify ${
                  location.pathname === item.path
                    ? "font-medium text-white"
                    : "hover:font-medium hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="">
        <ul className="text-flaxwhite text-2xl">
          <li
            className={`transition-all duration-200 ease-in-out w-full ${
              location.pathname === "/settings" ? "bg-bloodred" : "hover:bg-bloodred"
            }`}
          >
            <Link
              to="/settings"
              className={`block w-full p-3 text-center ${
                location.pathname === "/settings"
                  ? "font-medium text-white"
                  : "hover:font-medium hover:text-white"
              }`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
