const mongoose = require("mongoose");

const NutrientSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    fats: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    fiber: { type: Number, required: true },
    sugar: { type: Number },
    cholesterol: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nutrient", NutrientSchema);
