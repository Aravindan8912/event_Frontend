import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";
import Home from "./pages/Home";
import Venue from "./pages/Venue";
import Suppliers from "./pages/Suppliers";
import About from "./pages/About";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const handleLogin = () => {
    console.log("Login clicked");
    // Add your login logic here
  };

  const handleSignup = () => {
    console.log("Signup clicked");
    // Add your signup logic here
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Add your search logic here
  };

  const handleLanguageChange = (language: string) => {
    console.log("Language changed to:", language);
    // Add your language change logic here
  };

  return (
    <Router>
      <div style={{ width: "100%", minHeight: "100vh", margin: 0, padding: 0 }}>
        <Header
          companyName="EventPro"
          onLogin={handleLogin}
          onSignup={handleSignup}
          onSearch={handleSearch}
          onLanguageChange={handleLanguageChange}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
