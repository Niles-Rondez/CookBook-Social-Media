import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [openOptions, setOpenOptions] = useState(null); // Tracks which post has the options menu open
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/src/data/recipes.json");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    const fetchNotifications = async () => {
      try {
        const response = await fetch("/src/data/notifications.json");
        if (!response.ok) {
          throw new Error("Failed to fetch notifications");
        }
        const data = await response.json();
        setNotifications(data.notifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchRecipes();
    fetchNotifications();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddRecipe = () => {
    navigate("/new-recipe");
  };

  const toggleOptions = (id) => {
    setOpenOptions((prev) => (prev === id ? null : id)); // Open/close the options menu
  };

  const handleSavePost = (recipeId) => {
    alert(`Recipe with ID: ${recipeId} has been saved.`);
    setOpenOptions(null); // Close the menu after an action
  };

  const getTagColor = (tag) => {
    const colors = {
      Healthy: "bg-green-100 text-green-800",
      Salad: "bg-blue-100 text-blue-800",
      Dessert: "bg-yellow-100 text-yellow-800",
      Snack: "bg-purple-100 text-purple-800",
      Keto: "bg-teal-100 text-teal-800",
      Default: "bg-gray-100 text-gray-800",
    };
    return colors[tag] || colors.Default;
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-row">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search and New Recipe */}
        <div className="flex justify-between items-center bg-white p-4 rounded-full shadow-md w-full max-w-4xl mb-6 space-x-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-full w-full max-w-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75L19.5 19.5m-7.125-7.125A6.375 6.375 0 1118 6.375 6.375 6.375 0 0112.375 12.375z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search CookBook"
              value={searchTerm}
              onChange={handleSearch}
              className="bg-transparent outline-none w-full text-gray-600 placeholder-gray-400 rounded-full px-2"
            />
          </div>
          <button
            onClick={handleAddRecipe}
            className="flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-red-700 transition"
          >
            <span>+</span>
            <span>New Recipe</span>
          </button>
        </div>

        {/* Posts */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 w-4/5 mx-auto relative"
              >
                {/* Three-dot menu */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleOptions(recipe.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ⋮
                  </button>
                  {openOptions === recipe.id && (
                    <div className="absolute top-0 right-8 bg-white shadow-md rounded-md p-2">
                      <button
                        onClick={() => handleSavePost(recipe.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Save Post
                      </button>
                      <button
                        onClick={() => alert("Feature not yet implemented")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Another Option
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src={recipe.profilePic}
                    alt={`${recipe.author}'s profile`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{recipe.author}</p>
                    <p className="text-sm text-gray-400">{recipe.time}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {recipe.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {recipe.calories} | {recipe.protein} | {recipe.carbs} |{" "}
                    {recipe.fat}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{recipe.description}</p>
                <img
                  src={recipe.imgUrl}
                  alt={recipe.title}
                  className="w-full h-80 object-cover rounded-md"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No recipes found.</p>
          )}
        </div>
      </div>

      {/* Notifications Panel */}
      <div className="w-80 bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((note, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <img
                src={note.profilePic}
                alt={`${note.author}'s profile`}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800">
                  <b>{note.author}</b> {note.message}
                </p>
                <p className="text-xs text-gray-400">Just now</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
