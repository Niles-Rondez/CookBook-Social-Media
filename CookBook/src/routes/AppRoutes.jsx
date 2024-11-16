import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Discover from "../pages/Discover";
import SavedRecipes from "../pages/SavedRecipes";
import Groups from "../pages/Groups";
import NewRecipe from "../pages/NewRecipe";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/saved" element={<SavedRecipes />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/new-recipe" element={<NewRecipe />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
