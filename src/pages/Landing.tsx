import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="company-name">
          <h1>Endless Love</h1>
        </div>

        <div className="auth-buttons">
          {isAuthenticated ? (
            <div className="user-section">
              <span className="welcome-text">Welcome, {user?.firstName}!</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
              <button className="signup-btn" onClick={handleSignup}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      <main className="landing-content">
        <div className="hero-section">
          <h2>Welcome to Endless Love</h2>
          <p>Your journey to forever starts here</p>
          {!isAuthenticated && (
            <div className="cta-buttons">
              <button className="cta-primary" onClick={handleSignup}>
                Get Started
              </button>
              <button className="cta-secondary" onClick={handleLogin}>
                Sign In
              </button>
            </div>
          )}
        </div>
      </main>

      <style>{`
        .landing-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          flex-direction: column;
        }

        .landing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .company-name h1 {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .auth-buttons {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .login-btn, .signup-btn, .logout-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .login-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .login-btn:hover {
          background: white;
          color: #667eea;
        }

        .signup-btn {
          background: white;
          color: #667eea;
        }

        .signup-btn:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .logout-btn {
          background: #e74c3c;
          color: white;
        }

        .logout-btn:hover {
          background: #c0392b;
        }

        .user-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .welcome-text {
          color: white;
          font-weight: 500;
        }

        .landing-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .hero-section {
          text-align: center;
          color: white;
          max-width: 600px;
        }

        .hero-section h2 {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-section p {
          font-size: 1.5rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary, .cta-secondary {
          padding: 15px 30px;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-primary {
          background: white;
          color: #667eea;
        }

        .cta-primary:hover {
          background: #f8f9fa;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .landing-header {
            padding: 15px 20px;
            flex-direction: column;
            gap: 15px;
          }

          .company-name h1 {
            font-size: 2rem;
          }

          .auth-buttons {
            gap: 10px;
          }

          .login-btn, .signup-btn, .logout-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .hero-section h2 {
            font-size: 2.5rem;
          }

          .hero-section p {
            font-size: 1.2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 200px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .landing-header {
            padding: 10px 15px;
          }

          .company-name h1 {
            font-size: 1.8rem;
          }

          .hero-section h2 {
            font-size: 2rem;
          }

          .hero-section p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
