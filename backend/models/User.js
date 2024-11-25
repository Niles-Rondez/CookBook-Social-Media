const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures usernames are unique
    minlength: 3, // Minimum length for username (you can adjust)
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if the password is modified
  const salt = await bcrypt.genSalt(10); // Salt rounds
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
  next();
});

module.exports = mongoose.model("User", userSchema);
