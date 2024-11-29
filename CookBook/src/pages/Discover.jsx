import React, { useState } from "react";

function Discover() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [notifications, setNotifications] = useState([
    { author: "Admin", message: "New recipe posted!", profilePic: "https://via.placeholder.com/100" },
    { author: "Chef Alex", message: "Your recipe was liked!", profilePic: "https://via.placeholder.com/100" },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "High Protein Pancakes",
      author: "Jane Doe",
      profilePic: "https://via.placeholder.com/100",
      time: "3 hours ago",
      imgUrl: "https://via.placeholder.com/300",
      description: "Fluffy pancakes with a protein boost.",
      calories: "350 kcal",
      protein: "25g",
      carbs: "45g",
      fat: "10g",
      servings: 4,
      cookTime: "20 mins",
      rating: 4.5,
      reviews: 12,
      tags: ["Breakfast", "Healthy"],
    },
    {
      id: 2,
      title: "Keto Avocado Wrap",
      author: "John Smith",
      profilePic: "https://via.placeholder.com/100",
      time: "5 hours ago",
      imgUrl: "https://via.placeholder.com/300",
      description: "A delicious keto-friendly wrap.",
      calories: "250 kcal",
      protein: "15g",
      carbs: "10g",
      fat: "20g",
      servings: 2,
      cookTime: "10 mins",
      rating: 4.2,
      reviews: 8,
      tags: ["Keto", "Lunch"],
    },
    {
      id: 3,
      title: "Vegan Buddha Bowl",
      author: "Emily Clark",
      profilePic: "https://via.placeholder.com/100",
      time: "6 hours ago",
      imgUrl: "https://via.placeholder.com/300",
      description: "A colorful bowl of veggies and grains.",
      calories: "400 kcal",
      protein: "18g",
      carbs: "55g",
      fat: "12g",
      servings: 3,
      cookTime: "15 mins",
      rating: 4.8,
      reviews: 20,
      tags: ["Vegan", "Dinner"],
    },
  ]);

  const allTags = ["Healthy", "Keto", "Vegan", "Breakfast", "Lunch", "Dinner"];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const getTagColor = (tag) =>
    selectedTags.includes(tag)
      ? "bg-red-500 text-white"
      : "bg-gray-100 text-gray-800";

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-md overflow-y-auto z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Notifications</h2>
            <button
              onClick={closeNotifications}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
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

        {/* Search and Tags */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex-grow bg-gray-100 rounded-full p-3">
              <input
                type="text"
                placeholder="Search CookBook"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition">
              Search
            </button>
          </div>
          <div className="flex flex-wrap mt-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-sm px-3 py-1 rounded-full m-1 shadow-sm transition ${getTagColor(tag)}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md flex p-4 space-x-4"
            >
              <img
                src={post.imgUrl}
                alt={post.title}
                className="w-48 h-48 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                  <p className="text-gray-500 text-sm">
                    By {post.author} • {post.time}
                  </p>
                  <p className="text-gray-700 mt-2">{post.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-gray-500 text-sm">Calories</p>
                    <p className="font-bold">{post.calories}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Protein</p>
                    <p className="font-bold">{post.protein}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Servings</p>
                    <p className="font-bold">{post.servings}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Cook Time</p>
                    <p className="font-bold">{post.cookTime}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-yellow-500 font-bold">
                      {post.rating} ★
                    </p>
                    <p className="text-gray-500 text-sm">({post.reviews} reviews)</p>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
