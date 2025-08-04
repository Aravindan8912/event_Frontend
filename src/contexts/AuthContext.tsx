import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "../config/axios";
import { AxiosError } from "axios";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountType: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on app load
  useEffect(() => {
    const initAuth = async () => {
      console.log("Initializing authentication...");
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          console.log("Found access token, verifying...");
          // Set authorization header for this request
          const response = await axios.get("/api/users/profile", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log("Token verified, user data:", response.data.user);
          setUser(response.data.user);
        } catch (error) {
          console.log("Token verification failed, clearing storage");
          // Token is invalid, clear storage
          localStorage.removeItem("accessToken");
        }
      } else {
        console.log("No access token found");
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      const { accessToken } = response.data;

      // Store access token
      localStorage.setItem("accessToken", accessToken);

      // Get user profile to set user data
      try {
        const profileResponse = await axios.get("/api/users/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(profileResponse.data.user);
      } catch (profileError) {
        console.error("Failed to get user profile:", profileError);
        // Still consider login successful even if profile fetch fails
        setUser({
          id: "temp",
          email: email,
          firstName: "",
          lastName: "",
          accountType: "user",
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          throw new Error("Invalid email or password");
        } else if (error.response?.status === 400) {
          throw new Error("Please provide valid credentials");
        } else {
          throw new Error("Login failed. Please try again.");
        }
      } else {
        throw new Error("Network error. Please check your connection.");
      }
    }
  };

  const register = async (userData: any) => {
    try {
      console.log("Attempting to register with data:", userData);
      console.log("Making request to: /api/auth/register");

      const response = await axios.post("/api/auth/register", userData);

      console.log("Registration response:", response.data);
      console.log("Registration status:", response.status);

      // Registration endpoint only creates user account, doesn't log in
      // User needs to login separately after registration
      // Return the created user data for potential use
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Registration error:", error.response?.data);
        if (error.response?.status === 409) {
          throw new Error(
            "Email already exists. Please use a different email or try logging in."
          );
        } else if (error.response?.status === 400) {
          const errorMessage =
            error.response?.data?.message ||
            "Invalid data provided. Please check your information and try again.";
          throw new Error(errorMessage);
        } else if (error.response?.status === 404) {
          throw new Error(
            "Registration endpoint not found. Please check the server."
          );
        } else if (error.response?.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error(
            `Registration failed: ${
              error.response?.data?.message || "Please try again."
            }`
          );
        }
      } else {
        console.error("Network error:", error);
        throw new Error("Network error. Please check your connection.");
      }
    }
  };

  const logout = () => {
    // Clear tokens and user data
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const refreshToken = async () => {
    // This API doesn't support refresh tokens
    // Just logout the user when token expires
    logout();
    throw new Error("Token expired. Please login again.");
  };

  // Add axios interceptor for automatic token refresh
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            await refreshToken();
            return axios(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
    refreshToken,
  };

  console.log("AuthContext state:", {
    user,
    isAuthenticated: !!user,
    isLoading,
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { useAuth, AuthProvider };
