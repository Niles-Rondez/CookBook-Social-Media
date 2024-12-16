import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.token); // Save token in localStorage
      setMessage("Login successful");
      // Redirect to Home
      window.location.href = "/";
    } catch (error) {
      setMessage(error.message || "Login failed");
    }
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
          onSubmit={handleLogin}
          className="bg-white rounded-3xl shadow-lg p-8 w-[90%] max-w-[416px] flex flex-col relative"
        >
          {message && <p className="text-red-500 mb-4">{message}</p>}

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

          {/* Forgot password link outside form, aligned right */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-500 hover:text-michelin"
            >
              Forgot password?
            </Link>
          </div>

          {/* Log In button centered and bold, with wider width */}
          <button
            type="submit"
            className="w-[50%] bg-sunrise text-white py-2 px-3 rounded-md hover:bg-orange-500 mx-auto text-lg font-bold mt-2"
          >
            Log In
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-michelin hover:text-sunrise">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
