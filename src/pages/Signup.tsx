import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Prepare the data for the backend API
      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      console.log("Sending registration data:", signupData);
      await register(signupData);
      toast.success("Account created successfully! Please login to continue.");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration error in component:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`);
    toast(`Signing up with ${provider}...`);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          {/* Header */}
          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Join Endless Love and start your journey</p>
          </div>

          {/* Social Signup Buttons */}
          <div className="social-signup">
            <button
              className="social-btn google-btn"
              onClick={() => handleSocialSignup("Google")}
            >
              <span className="social-icon">🔍</span>
              Sign up with Google
            </button>
            <button
              className="social-btn facebook-btn"
              onClick={() => handleSocialSignup("Facebook")}
            >
              <span className="social-icon">📘</span>
              Sign up with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username *</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? "error" : ""}
                placeholder="Enter your username"
              />
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error" : ""}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="loading-spinner">⏳</span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Sign in here</Link>
            </p>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="signup-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>

      <style>{`
        .signup-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .signup-container {
          width: 100%;
          max-width: 500px;
          position: relative;
          z-index: 2;
          margin: 0 auto;
        }

        .signup-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          width: 100%;
          box-sizing: border-box;
        }

        .signup-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .signup-header h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 10px;
          font-weight: bold;
          line-height: 1.2;
        }

        .signup-header p {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        .social-signup {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          background: white;
          color: #333;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .social-btn:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .google-btn:hover {
          border-color: #4285f4;
          color: #4285f4;
        }

        .facebook-btn:hover {
          border-color: #1877f2;
          color: #1877f2;
        }

        .social-icon {
          font-size: 1.2rem;
        }

        .divider {
          text-align: center;
          margin: 30px 0;
          position: relative;
        }

        .divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e0e0e0;
        }

        .divider span {
          background: white;
          padding: 0 20px;
          color: #666;
          font-weight: 500;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .form-group label {
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          font-size: 0.95rem;
          line-height: 1.2;
        }

        .form-group input {
          padding: 15px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.3s;
          width: 100%;
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
        }

        .form-group input.error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 0.85rem;
          margin-top: 5px;
          line-height: 1.2;
        }

        .password-input {
          position: relative;
          width: 100%;
        }

        .password-input input {
          padding-right: 50px;
          width: 100%;
        }

        .password-toggle {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 5px;
        }

        .signup-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 15px 20px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
          width: 100%;
          box-sizing: border-box;
        }

        .signup-btn:hover:not(:disabled) {
          background: #5a6fd8;
          transform: translateY(-2px);
        }

        .signup-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .login-link {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }

        .login-link p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .login-link a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }

        .login-link a:hover {
          text-decoration: underline;
        }

        .signup-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          top: -100px;
          right: -100px;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          bottom: -75px;
          left: -75px;
        }

        .circle-3 {
          width: 100px;
          height: 100px;
          top: 50%;
          right: 10%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .signup-page {
            padding: 15px;
          }
          
          .signup-card {
            padding: 30px 25px;
          }

          .signup-header h1 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 480px) {
          .signup-page {
            padding: 10px;
          }
          
          .signup-card {
            padding: 25px 20px;
          }

          .signup-header h1 {
            font-size: 2rem;
          }

          .signup-header p {
            font-size: 1rem;
          }

          .social-btn {
            padding: 12px 15px;
            font-size: 0.9rem;
          }

          .form-group input {
            padding: 12px 15px;
            font-size: 0.9rem;
          }

          .signup-btn {
            padding: 12px 15px;
            font-size: 1rem;
          }
        }

        @media (max-width: 360px) {
          .signup-card {
            padding: 20px 15px;
          }

          .signup-header h1 {
            font-size: 1.8rem;
          }

          .form-group label {
            font-size: 0.9rem;
          }

          .form-group input {
            padding: 10px 12px;
            font-size: 0.85rem;
          }
        }
      `}</style>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 4000,
            style: {
              background: "#4CAF50",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "#f44336",
            },
          },
        }}
      />
    </div>
  );
};

export default Signup;
