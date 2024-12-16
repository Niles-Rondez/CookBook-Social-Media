import { useState } from "react";
import axios from "axios"; // Make sure axios is installed

function NewRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "", unit: "" }]);
  const [steps, setSteps] = useState([]);
  const [image, setImage] = useState(null);
  const [nutrition, setNutrition] = useState({
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
    sugar: "",
  });
  const [recipeDescription, setRecipeDescription] = useState("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "" }]);
  };

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newRecipeData = {
      userID: 1, // Use the actual logged-in user's ID here
      postHeader: recipeName,
      description: recipeDescription,
      prepTime: "30 mins", // Example, you may want to add a field for this
      dietType: "vegetarian", // Example, you may want to add a field for this
      ingredients: ingredients,
      steps: steps,
      nutrition: nutrition,
    };
  
    try {
      const response = await axios.post("/api/posts", newRecipeData);
      alert("Recipe submitted successfully!");
    } catch (error) {
      console.error("Error submitting recipe:", error.response || error.message);
      alert("Failed to submit recipe.");
    }
  };
  

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg space-y-6 overflow-y-auto max-h-[90vh]">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">Add a New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Name */}
          <div>
            <label htmlFor="recipeName" className="block text-lg font-medium text-gray-700">Recipe Name</label>
            <input
              id="recipeName"
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="Enter recipe name"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Recipe Description */}
          <div>
            <label htmlFor="recipeDescription" className="block text-lg font-medium text-gray-700">Recipe Description</label>
            <textarea
              id="recipeDescription"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
              placeholder="Enter a brief description of the recipe"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-lg font-medium text-gray-700">Name</div>
              <div className="text-lg font-medium text-gray-700">Quantity</div>
              <div className="text-lg font-medium text-gray-700">Unit</div>
            </div>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                  placeholder="Ingredient name"
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="number"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                  placeholder="Quantity"
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                  placeholder="Unit"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="bg-red-600 text-white py-1 px-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-30"
            >
              + Add Ingredient
            </button>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Steps</h2>
            {steps.map((step, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddStep}
              className="bg-red-600 text-white py-1 px-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
            >
              + Add Step
            </button>
          </div>

          {/* Recipe Photo */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Recipe Photos</h2>
            <label 
              htmlFor="recipe-photo" 
              className="bg-red-600 text-white py-1 px-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 cursor-pointer"
            >
              Upload Photo
            </label>
            <input
              id="recipe-photo"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
              accept="image/*"
            />
            {image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Recipe preview"
                  className="w-32 h-32 object-cover mt-2 rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Nutrition Facts */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Nutrition Facts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-lg font-medium text-gray-700">Calories</label>
                <input
                  type="number"
                  value={nutrition.calories}
                  onChange={(e) => setNutrition({ ...nutrition, calories: e.target.value })}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Protein</label>
                <input
                  type="number"
                  value={nutrition.protein}
                  onChange={(e) => setNutrition({ ...nutrition, protein: e.target.value })}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Fat</label>
                <input
                  type="number"
                  value={nutrition.fat}
                  onChange={(e) => setNutrition({ ...nutrition, fat: e.target.value })}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Carbs</label>
                <input
                  type="number"
                  value={nutrition.carbs}
                  onChange={(e) => setNutrition({ ...nutrition, carbs: e.target.value })}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700">Sugar</label>
                <input
                  type="number"
                  value={nutrition.sugar}
                  onChange={(e) => setNutrition({ ...nutrition, sugar: e.target.value })}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
            >
              Publish Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRecipe;
