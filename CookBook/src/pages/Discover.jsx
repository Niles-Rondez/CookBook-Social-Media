import React, { useState, useEffect } from "react";

function Discover() {
  const [recipes, setRecipes] = useState([]); // Store all recipes
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Recipes after filtering
  const [selectedTag, setSelectedTag] = useState(""); // Selected tag for filtering
  const [searchTerm, setSearchTerm] = useState(""); // Search input value

  // Fetch recipes from the JSON
  useEffect(() => {
    fetch("/path/to/recipes.json") // Replace with your actual path
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data); // Initially display all recipes
      })
      .catch((err) => console.error("Failed to fetch recipes:", err));
  }, []);

  // Filter recipes by tag and search term
  useEffect(() => {
    let filtered = recipes;

    if (selectedTag) {
      filtered = filtered.filter((recipe) =>
        recipe.tags.includes(selectedTag)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [selectedTag, searchTerm, recipes]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Discover Delicious Recipes
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-1/2 border rounded-lg shadow-sm"
        />
      </div>

      {/* Tags */}
      <div className="flex justify-center mb-6 space-x-4">
        {["Healthy", "Salad", "Dessert", "Snack", "Keto", "Low Carb"].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full ${
                selectedTag === tag
                  ? "bg-red-700 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tag}
            </button>
          )
        )}
        {selectedTag && (
          <button
            onClick={() => setSelectedTag("")}
            className="px-4 py-2 rounded-full bg-gray-400 text-white"
          >
            Clear Tag
          </button>
        )}
      </div>

      {/* Recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={recipe.imgUrl}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src={recipe.profilePic}
                  alt={recipe.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h2 className="font-semibold">{recipe.author}</h2>
                  <p className="text-gray-500 text-sm">{recipe.time}</p>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-2">{recipe.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{recipe.calories}</span>
                <span>{recipe.protein}</span>
                <span>{recipe.carbs}</span>
                <span>{recipe.fat}</span>
              </div>
              <div className="mt-3 flex gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredRecipes.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No recipes match your search.
        </div>
      )}
    </div>
  );
}

export default Discover;
