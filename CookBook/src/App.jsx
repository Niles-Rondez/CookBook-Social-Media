import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Home,
  Login,
  Signup,
  MyCookbook,
  Discover,
  Settings,
  Groups,
  NewRecipe,
} from "./pages"; // Importing pages

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex">
      {/* Render Navbar only if the current route is not Login or Signup */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}

      <div className={`flex-1 p-4 ${isAuthPage ? "ml-0" : "ml-[250px]"}`}>
        {/* Main content will be rendered here */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycookbook" element={<MyCookbook />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/newrecipe" element={<NewRecipe />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
