import axios from "axios";

// Set the base URL for all API calls
// In development, we use the Vite proxy, so we can use relative URLs
// In production, you can set VITE_API_BASE_URL environment variable
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://13.49.238.61:3000";

console.log(
  "Setting axios base URL to:",
  API_BASE_URL || "Using relative URLs (proxy)"
);

// Create a configured axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add request interceptor for logging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `Making ${config.method?.toUpperCase()} request to: ${config.url}`
    );
    console.log("Full URL:", (config.baseURL || "") + (config.url || ""));
    console.log("Base URL:", config.baseURL);
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(
      `Response received from: ${response.config.url}`,
      response.status
    );
    return response;
  },
  (error) => {
    console.error(
      `Error from: ${error.config?.url}`,
      error.response?.status,
      error.response?.data
    );
    return Promise.reject(error);
  }
);

export default axiosInstance;
