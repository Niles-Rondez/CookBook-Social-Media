// src/pages/Settings.jsx
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication-related data from storage
    localStorage.removeItem("userToken"); // Adjust based on your auth implementation
    sessionStorage.removeItem("userToken");

    // Redirect the user to the login page or home page after logging out
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p className="text-lg mb-6">
        Modify and change the application depending on your needs!
      </p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-red-700 transition"
      >
        Log Out
      </button>
    </div>
  );
}

export default Settings;
