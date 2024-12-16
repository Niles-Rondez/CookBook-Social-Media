const { Post, Ingredient, Nutrient } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { recipeName, recipeDescription, ingredients, steps, nutrition, userID } = JSON.parse(
      req.body.data
    );

    // Create Post
    const post = await Post.create({
      userID,
      postHeader: recipeName,
      description: recipeDescription,
      prepTime: steps.length + " steps", // Example for prep time
      dietType: "General", // Adjust based on your use case
    });

    // Add Ingredients
    const ingredientPromises = ingredients.map((ingredient) =>
      Ingredient.create({
        postID: post.postID,
        ingredientName: ingredient.name,
        amount: ingredient.quantity,
        unit: ingredient.unit,
      })
    );
    await Promise.all(ingredientPromises);

    // Add Nutrition Facts
    await Nutrient.create({
      postID: post.postID,
      calories: nutrition.calories,
      protein: nutrition.protein,
      fats: nutrition.fat,
      carbohydrates: nutrition.carbs,
      sugar: nutrition.sugar,
    });

    res.status(201).json({ message: "Recipe created successfully", post });
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Failed to create recipe" });
  }
};
