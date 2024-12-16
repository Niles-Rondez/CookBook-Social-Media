import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import Axios

function Discover() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [notifications, setNotifications] = useState([
    { author: "Admin", message: "New recipe posted!", profilePic: "https://via.placeholder.com/100" },
    { author: "Chef Alex", message: "Your recipe was liked!", profilePic: "https://via.placeholder.com/100" },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // State to store fetched posts from backend
  const [posts, setPosts] = useState([]);

  const allTags = ["Healthy", "Keto", "Vegan", "Breakfast", "Lunch", "Dinner"];

  const navigate = useNavigate();  // Initialize navigate function

  // Fetch posts from backend when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        console.log(response.data);  // Log the response to check the structure
        if (Array.isArray(response.data)) {
          setPosts(response.data);  // Set posts only if it's an array
        } else {
          console.error("Expected an array of posts, but received:", response.data);
          setPosts([]);  // Set an empty array as fallback
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);  // Set an empty array on error as fallback
      }
    };
  
    fetchPosts();  // Call the function to fetch posts
  }, []);  // Empty dependency array ensures this runs once when the component mounts
  

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

  const handleAddRecipe = () => {
    navigate("/newrecipe");  // Navigate to the new recipe page
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.postHeader.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.dietType && post.dietType.includes(tag));
    return matchesSearch && matchesTags;
  });

  const getTagColor = (tag) =>
    selectedTags.includes(tag)
      ? "bg-red-500 text-white"
      : "bg-gray-100 text-gray-800";

  return (
    <div
      className={`flex-1 p-6 transition-all duration-300 ${
        showNotifications ? "mr-80" : ""
      }`}
    >
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
      <div className="flex-1 p-6">
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
        {/* Tag Phrase */}
        <p
          className="text-center text-lg font-semibold text-gray-800 mb-4"
          style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "40px" }}
        >
          Create, Explore, & Share Recipes all Around the World
        </p>
        {/* Tags */}
        <div className="flex flex-wrap justify-center mb-6">
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
        {/* Posts */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {filteredPosts.map((post) => (
            <div
              key={post.postID}
              className="bg-white rounded-lg shadow-md flex flex-col p-6 space-y-4"
            >
              <div className="flex space-x-4">
                <img
                  src={post.imgUrl || "https://via.placeholder.com/300"}  // Default placeholder if no image is provided
                  alt={post.postHeader}
                  className="w-48 h-48 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{post.postHeader}</h3>
                    <p className="text-gray-500 text-sm">
                      By {post.user ? post.user.name : "Unknown Author"} • {new Date(post.dateCreated).toLocaleString()}
                    </p>
                    <p className="text-gray-700 mt-2">{post.postDesc}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-red-500 hover:text-red-700 text-sm">View Recipe</button>
                    <div className="text-sm">
                      {post.dietType.join(", ")}
                    </div>
                  </div>
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
