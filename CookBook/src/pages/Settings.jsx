// src/pages/Settings.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Adjust based on your auth implementation
    sessionStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className="h-screen overflow-auto bg-gray-50 py-8 px-4 text-black">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-4 text-red-600">
          Settings
        </h1>
        <p className="text-center text-lg text-gray-600">
          Modify and change the application depending on your needs!
        </p>

        {/* User Preferences */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            User Preferences
          </h2>
          <div className="space-y-3">
            <label className="block">
              <span>Profile Information</span>
              <input
                type="text"
                placeholder="Update Username"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
            <label className="block">
              <span>Email</span>
              <input
                type="email"
                placeholder="Update Email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
            <label className="block">
              <span>Profile Picture</span>
              <input type="file" className="mt-1 block w-full" />
            </label>
            <label className="block">
              <span>Bio</span>
              <textarea
                placeholder="Write something about yourself"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
          </div>
        </div>

        {/* Recipe Preferences */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            Recipe Preferences
          </h2>
          <div className="space-y-3">
            <label className="block">
              <span>Dietary Restrictions</span>
              <select className="mt-1 p-2 w-full border rounded-md">
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
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            Notifications
          </h2>
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

        {/* Privacy Settings */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            Privacy Settings
          </h2>
          <div className="space-y-3">
            <label className="block">
              <span>Account Visibility</span>
              <select className="mt-1 p-2 w-full border rounded-md">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </label>
            <label className="block">
              <span>Group Participation</span>
              <input
                type="text"
                placeholder="Who can invite you?"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
            <label className="block">
              <span>Recipe Sharing</span>
              <input
                type="text"
                placeholder="Visibility of personal recipes"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>
          </div>
        </div>

        {/* Content Management */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            Content Management
          </h2>
          <div className="space-y-3">
            <button className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Manage Saved Recipes
            </button>
            <button className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
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
