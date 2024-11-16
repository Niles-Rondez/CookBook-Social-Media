// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";

import { Home, MyCookbook, Signup, Discover, Groups, NewRecipe } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mycookbook" element={<MyCookbook />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/newrecipe" element={<NewRecipe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
