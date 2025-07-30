import { useState } from "react";

const Suppliers = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const suppliers = [
    {
      id: 1,
      name: "Elite Catering Services",
      category: "catering",
      specialty: "Fine Dining",
      rating: 4.9,
      image: "🍽️",
      description: "Premium catering for all types of events",
      priceRange: "$50-150 per person",
    },
    {
      id: 2,
      name: "Crystal Clear Photography",
      category: "photography",
      specialty: "Event Photography",
      rating: 4.8,
      image: "📸",
      description: "Professional event photography and videography",
      priceRange: "$500-2000",
    },
    {
      id: 3,
      name: "Bloom & Blossom Florists",
      category: "florist",
      specialty: "Wedding & Event Flowers",
      rating: 4.7,
      image: "🌸",
      description: "Beautiful floral arrangements for any occasion",
      priceRange: "$200-800",
    },
    {
      id: 4,
      name: "Sound & Light Productions",
      category: "entertainment",
      specialty: "Audio & Lighting",
      rating: 4.6,
      image: "🎵",
      description: "Professional sound and lighting equipment",
      priceRange: "$300-1500",
    },
    {
      id: 5,
      name: "Luxury Transportation Co.",
      category: "transportation",
      specialty: "Luxury Vehicles",
      rating: 4.8,
      image: "🚗",
      description: "Premium transportation services for events",
      priceRange: "$200-500",
    },
    {
      id: 6,
      name: "Creative Event Decor",
      category: "decoration",
      specialty: "Event Styling",
      rating: 4.9,
      image: "🎨",
      description: "Creative decoration and event styling services",
      priceRange: "$400-1200",
    },
    {
      id: 7,
      name: "DJ Master Pro",
      category: "entertainment",
      specialty: "DJ Services",
      rating: 4.7,
      image: "🎧",
      description: "Professional DJ services for all events",
      priceRange: "$300-800",
    },
    {
      id: 8,
      name: "Wedding Cake Delights",
      category: "catering",
      specialty: "Wedding Cakes",
      rating: 4.9,
      image: "🎂",
      description: "Custom wedding cakes and desserts",
      priceRange: "$200-600",
    },
  ];

  const categories = [
    { id: "all", name: "All Suppliers", icon: "🏢" },
    { id: "catering", name: "Catering", icon: "🍽️" },
    { id: "photography", name: "Photography", icon: "📸" },
    { id: "florist", name: "Florists", icon: "🌸" },
    { id: "entertainment", name: "Entertainment", icon: "🎵" },
    { id: "transportation", name: "Transportation", icon: "🚗" },
    { id: "decoration", name: "Decoration", icon: "🎨" },
  ];

  const filteredSuppliers =
    selectedCategory === "all"
      ? suppliers
      : suppliers.filter((supplier) => supplier.category === selectedCategory);

  return (
    <div className="suppliers-page">
      {/* Hero Section */}
      <section className="suppliers-hero">
        <div className="hero-content">
          <h1>Find Your Perfect Suppliers</h1>
          <p>Connect with trusted professionals for your event needs</p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="categories-section">
        <div className="container">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-card ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="suppliers-section">
        <div className="container">
          <h2>Available Suppliers</h2>
          <div className="suppliers-grid">
            {filteredSuppliers.map((supplier) => (
              <div key={supplier.id} className="supplier-card">
                <div className="supplier-header">
                  <div className="supplier-image">
                    <span className="supplier-icon">{supplier.image}</span>
                  </div>
                  <div className="supplier-info">
                    <h3>{supplier.name}</h3>
                    <p className="supplier-specialty">{supplier.specialty}</p>
                    <div className="supplier-rating">
                      <span className="stars">
                        {"★".repeat(Math.floor(supplier.rating))}
                      </span>
                      <span className="rating-text">{supplier.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="supplier-description">{supplier.description}</p>
                <div className="supplier-details">
                  <div className="price-range">
                    <span className="detail-label">💰</span>
                    <span>{supplier.priceRange}</span>
                  </div>
                </div>
                <div className="supplier-actions">
                  <button className="contact-btn">Contact Supplier</button>
                  <button className="view-profile-btn">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Planning?</h2>
          <p>Get in touch with our team to discuss your event requirements</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>

      <style>{`
        .suppliers-page {
          width: 100%;
        }

        .suppliers-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .categories-section {
          padding: 60px 20px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .categories-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .category-card {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 15px;
          padding: 30px 20px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .category-card:hover {
          border-color: #667eea;
          transform: translateY(-5px);
        }

        .category-card.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .category-icon {
          font-size: 2.5rem;
        }

        .category-name {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .suppliers-section {
          padding: 60px 20px;
        }

        .suppliers-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
        }

        .suppliers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .supplier-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .supplier-card:hover {
          transform: translateY(-5px);
        }

        .supplier-header {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .supplier-image {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .supplier-icon {
          font-size: 2.5rem;
        }

        .supplier-info h3 {
          font-size: 1.3rem;
          color: #333;
          margin: 0 0 5px 0;
        }

        .supplier-specialty {
          color: #667eea;
          font-weight: 500;
          margin: 0 0 10px 0;
        }

        .supplier-rating {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .stars {
          color: #ffd700;
        }

        .rating-text {
          font-weight: bold;
          color: #666;
        }

        .supplier-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .supplier-details {
          margin-bottom: 20px;
        }

        .price-range {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #555;
        }

        .detail-label {
          font-size: 1.1rem;
        }

        .supplier-actions {
          display: flex;
          gap: 10px;
        }

        .contact-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          flex: 1;
          transition: background 0.3s;
        }

        .contact-btn:hover {
          background: #5a6fd8;
        }

        .view-profile-btn {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
          padding: 12px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          flex: 1;
          transition: all 0.3s;
        }

        .view-profile-btn:hover {
          background: #667eea;
          color: white;
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }

          .suppliers-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .supplier-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Suppliers;
