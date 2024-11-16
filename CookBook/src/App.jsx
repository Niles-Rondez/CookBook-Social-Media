// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, MyCookbook, Signup, Discover, Groups, NewRecipe } from "./pages";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
        <div className="flex-1 bg-grey p-5 content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mycookbook" element={<MyCookbook />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/newrecipe" element={<NewRecipe />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
