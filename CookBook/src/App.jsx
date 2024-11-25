import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components";
import {
  Home,
  MyCookbook,
  Signup,
  Discover,
  Groups,
  NewRecipe,
  Settings,
  Login,
} from "./pages";

function App() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 bg-grey p-5 ml-[250px] h-screen content-center">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
