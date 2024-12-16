import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with your backend URL

// Login function using Axios
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data; // Assume the response contains { token }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Signup function using Axios
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    return response.data; // Response after successful signup
  } catch (error) {
    throw new Error(error.response?.data?.message || "Sign up failed");
  }
};
