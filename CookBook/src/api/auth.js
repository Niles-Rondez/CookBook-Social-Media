// src/api/auth.js
import axios from "axios";
import { BACKEND_URL } from "../config";

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/auth/signup`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/auth/login`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
