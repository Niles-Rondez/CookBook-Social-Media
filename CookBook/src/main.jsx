import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="h-screen bg-blue-500 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">Time To start Coding</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
