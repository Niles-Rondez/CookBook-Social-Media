import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/auth";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signupUser({ username, email, password });
      setMessage("Sign up successful!");
      setShowNotification(true);
    } catch (error) {
      setMessage(error.message || "Sign up failed");
    }
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen flex bg-michelin">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center text-flaxwhite pl-10">
        <div className="mt-20 ">
          <h1 className="text-8xl mb-8">
            Cook<span className="text-sunrise">Book</span>
          </h1>
          <p className="text-2xl mb-8 max-w-[100%]">
            Create, Explore, and Share Recipes all around the world.
          </p>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleSignup}
          className="bg-white rounded-3xl shadow-lg p-8 w-[90%] max-w-[416px] flex flex-col relative"
        >
          {message && <p className="text-red-500 mb-4">{message}</p>}

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-500">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-cloud rounded-lg shadow-inner focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-cloud rounded-lg shadow-inner focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-500">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-cloud rounded-lg shadow-inner focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-[50%] bg-sunrise text-white py-2 px-3 rounded-md hover:bg-orange-500 mx-auto text-lg font-bold mt-2"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-michelin hover:text-sunrise">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>

      {showNotification && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white text-black p-4 rounded-md shadow-lg w-[90%] max-w-[416px]">
          <p>You're successfully registered!</p>
          <button
            onClick={handleGoToLogin}
            className="mt-2 bg-michelin text-white py-1 px-3 rounded-md hover:bg-gray-800"
          >
            Go to Login Page
          </button>
        </div>
      )}
    </div>
  );
}

export default Signup;
