// src/pages/Settings.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });
  const [language, setLanguage] = useState("English");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-50 py-8 px-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <p className="text-lg mb-6">
        Modify and change the application depending on your needs!
      </p>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* User Preferences Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">User Preferences</h2>
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`${
                darkMode ? "bg-green-500" : "bg-gray-300"
              } w-12 h-6 rounded-full relative transition`}
            >
              <div
                className={`${
                  darkMode ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-600"
                } w-6 h-6 rounded-full absolute top-0 left-0 transform transition`}
              />
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-3">
            <label className="flex justify-between items-center">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    email: !prev.email,
                  }))
                }
                className="w-5 h-5"
              />
            </label>
            <label className="flex justify-between items-center">
              <span>Push Notifications</span>
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    push: !prev.push,
                  }))
                }
                className="w-5 h-5"
              />
            </label>
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Language</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        {/* Logout Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-red-700 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
