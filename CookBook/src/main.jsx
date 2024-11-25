// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css"; // Import global Tailwind CSS file
import App from "./App"; // Import the main App component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Wrap in BrowserRouter to use routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
