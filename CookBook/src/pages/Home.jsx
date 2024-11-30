import React, { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Avocado Salad",
      author: "Jane Doe",
      profilePic: "https://via.placeholder.com/100",
      time: "2 hours ago",
      imgUrl: "https://via.placeholder.com/300",
      description: "A healthy and delicious avocado salad.",
      calories: "200 kcal",
      protein: "5g",
      carbs: "20g",
      fat: "15g",
      tags: ["Healthy", "Salad"],
    },
    {
      id: 2,
      title: "Chocolate Cake",
      author: "John Smith",
      profilePic: "https://via.placeholder.com/100",
      time: "5 hours ago",
      imgUrl: "https://via.placeholder.com/300",
      description: "Rich and creamy chocolate cake.",
      calories: "400 kcal",
      protein: "6g",
      carbs: "50g",
      fat: "20g",
      tags: ["Dessert"],
    },
  ]);

  const [notifications, setNotifications] = useState([
    { author: "Admin", message: "New recipe posted!", profilePic: "https://via.placeholder.com/100" },
    { author: "Chef Alex", message: "Your recipe was liked!", profilePic: "https://via.placeholder.com/100" },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [openOptions, setOpenOptions] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  const handleAddRecipe = () => {
    alert("Add New Recipe functionality not implemented.");
  };

  const getTagColor = (tag) => {
    const colors = {
      Healthy: "bg-green-100 text-green-800",
      Salad: "bg-blue-100 text-blue-800",
      Dessert: "bg-yellow-100 text-yellow-800",
      Default: "bg-gray-100 text-gray-800",
    };
    return colors[tag] || colors.Default;
  };

  const toggleOptions = (id) => {
    setOpenOptions((prev) => (prev === id ? null : id));
  };

  const handleSavePost = (id) => {
    alert(`Post ${id} saved!`);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-md overflow-y-auto z-50">
          {/* Notifications Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Notifications</h2>
            <button
              onClick={closeNotifications}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex items-center p-4 border-b">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h2 className="text-lg font-bold">John Doe</h2>
              <p className="text-gray-500">Followers: 100 | Following: 150</p>
            </div>
          </div>

          {/* Notifications List */}
          <div className="p-4">
            {notifications.length > 0 ? (
              notifications.map((notif, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 mb-2 shadow"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={notif.profilePic}
                      alt={`${notif.author}'s profile`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="font-medium text-gray-800">{notif.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No new notifications</p>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          showNotifications ? "mr-80" : ""
        }`}
      >
        {/* Notifications Toggle Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleNotifications}
            className="relative flex items-center bg-white p-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405a2.032 2.032 0 01-.595-1.41V11a7 7 0 10-14 0v3.185a2.032 2.032 0 01-.595 1.41L4 17h5m6 0v1a2 2 0 11-4 0v-1m6 0H9"
              />
            </svg>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
        </div>

        {/* Search and New Recipe */}
        <div className="flex justify-between items-center bg-white p-4 rounded-full shadow-md w-full max-w-4xl mb-6 mx-auto space-x-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-full flex-grow">
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

                {/* Adjusted Image Section */}
                <img
                  src={recipe.imgUrl}
                  alt={recipe.title}
                  className="w-full h-[350px] object-cover rounded-lg"
                />

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600">{recipe.description}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{recipe.calories}</span>
                  <span>{recipe.protein}</span>
                  <span>{recipe.carbs}</span>
                  <span>{recipe.fat}</span>
                </div>
                <div className="flex space-x-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No recipes found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
