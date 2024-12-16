import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    profilePicture: "",
    bio: "",
  });
  const [recipePreferences, setRecipePreferences] = useState({
    dietaryRestrictions: "",
    allergens: "",
    cuisinePreferences: "",
  });

  useEffect(() => {
    // Fetch user data from API when component loads
    axios
      .get("/api/auth/user") // Adjust this based on your API to get user data
      .then((response) => {
        setUserData({
          username: response.data.username,
          email: response.data.email,
          profilePicture: response.data.profilePicture,
          bio: response.data.bio,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");
    navigate("/login");
  };

  const handleProfileUpdate = () => {
    // Make a PUT request to update user profile data
    axios
      .put("/api/auth/update-profile", userData) // Adjust API endpoint
      .then((response) => {
        console.log("Profile updated:", response.data);
        // Optionally, show a success message or redirect
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleRecipePreferencesUpdate = () => {
    // Send recipe preferences to API (create or update post)
    const postData = {
      userID: 1, // You should get the user ID from session or token
      postHeader: "Recipe Header", // Example, adjust with actual data
      description: "Recipe description",
      prepTime: "30 minutes", // Example, adjust with actual data
      dietType: recipePreferences.dietaryRestrictions,
    };

    axios
      .post("/api/posts", postData) // Create a new post
      .then((response) => {
        console.log("Post created:", response.data);
        // Optionally, handle success response (e.g., show a success message)
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div className="h-screen overflow-auto bg-gray-50 py-8 px-4 text-black">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-4 text-red-600">Settings</h1>
        <p className="text-center text-lg text-gray-600">Modify and change the application depending on your needs!</p>

        {/* User Preferences */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">User Preferences</h2>
          <div className="space-y-3">
            <label className="block">
              <span>Profile Information</span>
              <input
                type="text"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
            <label className="block">
              <span>Email</span>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
            <label className="block">
              <span>Profile Picture</span>
              <input
                type="file"
                onChange={(e) => setUserData({ ...userData, profilePicture: e.target.files[0] })}
                className="mt-1 block w-full"
              />
            </label>
            <label className="block">
              <span>Bio</span>
              <textarea
                value={userData.bio}
                onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                placeholder="Write something about yourself"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
          </div>
        </div>

        {/* Recipe Preferences */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">Recipe Preferences</h2>
          <div className="space-y-3">
            <label className="block">
              <span>Dietary Restrictions</span>
              <select
                value={recipePreferences.dietaryRestrictions}
                onChange={(e) => setRecipePreferences({ ...recipePreferences, dietaryRestrictions: e.target.value })}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="">Select</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
              </select>
            </label>
            <label className="block">
              <span>Allergens</span>
              <input
                type="text"
                placeholder="Enter allergens (e.g., nuts, dairy)"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
            <label className="block">
              <span>Cuisine Preferences</span>
              <input
                type="text"
                placeholder="e.g., Italian, Asian"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">Notifications</h2>
          <div className="space-y-3">
            <label className="flex justify-between items-center">
              <span>Email Notifications</span>
              <input type="checkbox" className="w-5 h-5 text-red-600" />
            </label>
            <label className="flex justify-between items-center">
              <span>Push Notifications</span>
              <input type="checkbox" className="w-5 h-5 text-red-600" />
            </label>
            <label className="flex justify-between items-center">
              <span>Community Updates</span>
              <input type="checkbox" className="w-5 h-5 text-red-600" />
            </label>
          </div>
        </div>

        {/* Content Management */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">Content Management</h2>
          <div className="space-y-3">
            <button className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Manage Saved Recipes
            </button>
            <button
              onClick={handleRecipePreferencesUpdate}
              className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Edit Uploaded Recipes
            </button>
            <button className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Favorite Cuisines
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-red-700 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
