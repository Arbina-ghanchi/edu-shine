import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api/v1";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for logging (optional)
api.interceptors.request.use(
  (config) => {
    console.log(
      "Making API request:",
      config.method?.toUpperCase(),
      config.url
    );
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log("API response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const authService = {
  // Signup service
  signup: async (userData) => {
    try {
      const response = await api.post("/auth/signup", userData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || {
          message: error.message || "Network error occurred",
        },
        status: error.response?.status,
      };
    }
  },

  // Signin service (for future use)
  signin: async (credentials) => {
    console.log("Credentials:", credentials);
    try {
      const response = await api.post("/auth/login", credentials);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("Signin error:", error);
      return {
        success: false,
        error: error.response?.data || {
          message: error.message || "Network error occurred",
        },
        status: error.response?.status,
      };
    }
  },

  // Get user profile (for future use)
  getProfile: async (token) => {
    console.log("Token:", token);
    try {
      const response = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || {
          message: error.message || "Network error occurred",
        },
        status: error.response?.status,
      };
    }
  },

  deleteAccount: async (token, password) => {
    try {
      const response = await api.delete("/auth/delete", {
        data: { password },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || {
          message: error.message || "Network error occurred",
        },
        status: error.response?.status,
      };
    }
  },
};

export default authService;
