const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    profilePicture: { type: String, default: "default-profile.jpg" },
    status: { type: String, default: "novice" }, // e.g., verified chef, novice
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
