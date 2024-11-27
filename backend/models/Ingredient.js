const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    ingredientName: { type: String, required: true },
    amount: { type: Number, required: true },
    unit: { type: String, required: true }, // e.g., grams, cups
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", IngredientSchema);
