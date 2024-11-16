// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import global Tailwind CSS file
import App from "./App"; // Import the main App component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
