const Nutrient = require("../models/Nutrient");

const addNutrient = async (req, res) => {
  const { calories, protein, fats, carbohydrates, fiber, sugar, cholesterol } =
    req.body;

  try {
    const nutrient = new Nutrient({
      postId: req.params.postId,
      calories,
      protein,
      fats,
      carbohydrates,
      fiber,
      sugar,
      cholesterol,
    });

    await nutrient.save();
    res.status(201).json(nutrient);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error adding nutrient." });
  }
};

const getNutrientsByPost = async (req, res) => {
  try {
    const nutrients = await Nutrient.find({ postId: req.params.postId });
    res.status(200).json(nutrients);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error fetching nutrients." });
  }
};

module.exports = { addNutrient, getNutrientsByPost };
