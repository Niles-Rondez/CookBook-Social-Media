import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, MyCookbook, Signup, Discover, Groups, NewRecipe, Settings } from "./pages";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 bg-grey p-5 ml-[250px] h-screen content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mycookbook" element={<MyCookbook />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/newrecipe" element={<NewRecipe />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
