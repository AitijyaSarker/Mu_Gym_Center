import axios from "axios";

// Base URL of your backend
// ⚠️ Change this if you deploy backend to hosting (e.g., InfinityFree, Hostinger)
const API_BASE_URL = "http://localhost/gym-management/backend/api";

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ critical for PHP sessions/cookies
});

// Register user
export const register = async (userData) => {
  try {
    const response = await api.post("/register.php", userData);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Registration failed";
    console.error("Register error:", message);
    return { success: false, message };
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post("/login.php", credentials);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Login failed";
    console.error("Login error:", message);
    return { success: false, message };
  }
};

// Fetch user profile (if you add profile.php later)
export const getProfile = async () => {
  try {
    const response = await api.get("/profile.php");
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Profile fetch failed";
    console.error("Profile fetch error:", message);
    return { success: false, message };
  }
};

export default api;
