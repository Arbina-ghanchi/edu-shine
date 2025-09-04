import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Logging interceptor (optional)
api.interceptors.request.use(
  (config) => {
    console.log(
      "Making API request:",
      config.method?.toUpperCase(),
      config.url
    );
    return config;
  },
  (error) => Promise.reject(error)
);

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

export const formService = {
  // Get all forms by userId
  getFormsByUserId: async (userId) => {
    try {
      const response = await api.get(`/parentform/my-all-form/${userId}`);
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
  // Create a new form
  createForm: async (formData) => {
    try {
      const response = await api.post("/parentform", formData);
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

export default formService;
