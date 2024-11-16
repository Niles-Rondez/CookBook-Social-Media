const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/discover">Discover</a>
        </li>
        <li>
          <a href="/saved">Saved Recipes</a>
        </li>
        <li>
          <a href="/groups">Groups</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
