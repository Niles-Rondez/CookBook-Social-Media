const Ingredient = require("../models/Ingredient");

const addIngredient = async (req, res) => {
  const { ingredientName, amount, unit } = req.body;

  try {
    const ingredient = new Ingredient({
      postId: req.params.postId,
      ingredientName,
      amount,
      unit,
    });

    await ingredient.save();
    res.status(201).json(ingredient);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error adding ingredient." });
  }
};

const getIngredientsByPost = async (req, res) => {
  try {
    const ingredients = await Ingredient.find({ postId: req.params.postId });
    res.status(200).json(ingredients);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error fetching ingredients." });
  }
};

module.exports = { addIngredient, getIngredientsByPost };
