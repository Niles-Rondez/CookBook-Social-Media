// src/pages/MyCookbook.jsx
import React from "react";

function MyCookbook() {
  return (
    <div className="p-8 font-sans">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Create, Explore, & Share Recipes all Around the World
      </h1>

      {/* Profile Section */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/100" // Replace with the profile image URL
            alt="David Laid"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-xl font-semibold">David Laid</h2>
            <p>160 followers</p>
            <p>100 following</p>
            <p className="mt-4 text-sm">
              I'm a passionate home cook who believes that every meal is an
              opportunity to bring joy, comfort, and a bit of adventure to the
              table. Inspired by flavors from around the world and a love for
              wholesome, approachable ingredients, I create recipes that are
              easy to follow and satisfying to eat.
            </p>
            <a
              href="http://davidlaid51.com"
              className="text-blue-500 mt-2 block"
            >
              http://davidlaid51.com
            </a>
            <p className="text-sm mt-1">The place where kitchen meet.</p>
          </div>
        </div>
      </div>

      {/* My Posts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
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

        {/* Card 2 (Duplicate for design) */}
        <div className="bg-white p-4 shadow-md rounded-lg">
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
      </div>
    </div>
  );
}

export default MyCookbook;
