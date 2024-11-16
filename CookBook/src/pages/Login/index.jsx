import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800">Login</h1>
      <form className="mt-6 w-96 p-4 bg-white shadow-md rounded-lg">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
