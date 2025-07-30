import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  companyName?: string;
  onLogin?: () => void;
  onSignup?: () => void;
  onSearch?: (query: string) => void;
  onLanguageChange?: (language: string) => void;
}

const Header = ({
  companyName = "Company Name",
  onLogin,
  onSignup,
  onSearch,
  onLanguageChange,
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Venue", path: "/venue" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "About", path: "/about" },
    { name: "Media", path: "/media" },
    { name: "Contact Us", path: "/contact" },
  ];

  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    onLanguageChange?.(language);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    onLogin?.();
    navigate("/login");
    closeMobileMenu();
  };

  const handleSignupClick = () => {
    onSignup?.();
    navigate("/signup");
    closeMobileMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="company-brand">
          <Link to="/" className="company-logo">
            {companyName}
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className="main-navigation desktop-nav">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="utility-actions desktop-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>

          <div className="language-selector">
            <button
              className="language-button"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              {selectedLanguage} ▼
            </button>
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => handleLanguageSelect(language)}
                    className="language-option"
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="auth-button login-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button
            className="auth-button signup-btn"
            onClick={handleSignupClick}
          >
            Sign Up
          </button>
        </div>

        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        >
          <div className="mobile-menu-content">
            <nav className="mobile-navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mobile-utility-actions">
              <div className="mobile-search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="mobile-search-input"
                />
                <button className="mobile-search-button">🔍</button>
              </div>

              <div className="mobile-language-selector">
                <button
                  className="mobile-language-button"
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                >
                  {selectedLanguage} ▼
                </button>
                {isLanguageDropdownOpen && (
                  <div className="mobile-language-dropdown">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => handleLanguageSelect(language)}
                        className="mobile-language-option"
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="mobile-auth-button mobile-login-btn"
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button
                className="mobile-auth-button mobile-signup-btn"
                onClick={handleSignupClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
