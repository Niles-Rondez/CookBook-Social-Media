import React, { useState } from "react";

function MyCookbook() {
  const [activeTab, setActiveTab] = useState("Collections");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 font-sans bg-gray-100">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6"
      style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "40px" }}>
        Create, Explore, & Share Recipes all Around the World
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/100" // Replace with profile image
          alt="David Laid"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        {/* Profile Details */}
        <h2 className="text-xl font-semibold">David Laid</h2>
        <div className="flex space-x-4 mt-2">
          <p>160 followers</p>
          <p>100 following</p>
        </div>
        <p className="mt-4 text-center text-sm">
        I'm a passionate home cook who believes that every meal is an opportunity to bring joy, comfort, and a bit of adventure to the table. Inspired by flavors from around the world and a love for wholesome, approachable ingredients, I create recipes that are easy to follow and satisfying to eat. Whether you’re a seasoned chef or just starting out, my goal is to make cooking feel fun, rewarding, and—most importantly—delicious!
        </p>
        <a
          href="http://davidlaid51.com"
          className="text-blue-500 mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://davidlaid51.com
        </a>
        <p className="text-sm mt-1">The place where kitchen meet.</p>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex justify-center space-x-6">
          <button
            className={`px-4 py-2 ${
              activeTab === "Collections"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Collections")}
          >
            Collections
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Activity"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Activity")}
          >
            Activity
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "Collections" ? (
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            className="bg-white p-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => alert("WAPA NA IMPLEMENT!")}
          >
            <h3 className="font-semibold mb-2">MY POSTS</h3>
            <div className="grid grid-cols-2 gap-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 1"
                className="w-full h-auto rounded"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 2"
                className="w-full h-auto rounded"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 3"
                className="w-full h-auto rounded"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 4"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => alert("Post clicked!")}
          >
            <h3 className="font-semibold mb-2">SAVED POSTS</h3>
            <div className="grid grid-cols-2 gap-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 1"
                className="w-full h-auto rounded"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 2"
                className="w-full h-auto rounded"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 3"
                className="w-full h-auto rounded"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Recipe 4"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-sm">
              <strong>David Laid</strong> commented on your post "Delicious
              Ramen Recipe".
            </p>
            <span className="text-gray-500 text-xs">2 hours ago</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-sm">
              <strong>John Doe</strong> liked your post "Keto Avocado Salad".
            </p>
            <span className="text-gray-500 text-xs">5 hours ago</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-sm">
              <strong>Sarah Smith</strong> started following you.
            </p>
            <span className="text-gray-500 text-xs">1 day ago</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCookbook;
