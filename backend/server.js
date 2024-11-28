const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const nutrientRoutes = require("./routes/nutrient");
const ingredientRoutes = require("./routes/ingredient");
const commentRoutes = require("./routes/comment");

dotenv.config();
const app = express();

// Enable CORS for your frontend (React running on localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL (adjust if it's different)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/nutrients", nutrientRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/comments", commentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
