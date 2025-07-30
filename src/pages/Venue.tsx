import React, { useState } from "react";

const Venue = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const venues = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      category: "hotel",
      location: "Downtown",
      capacity: "500 guests",
      price: "$5,000",
      image: "🏨",
      rating: 4.8,
      description: "Luxurious hotel with state-of-the-art facilities",
    },
    {
      id: 2,
      name: "Riverside Convention Center",
      category: "convention",
      location: "Riverside",
      capacity: "1000 guests",
      price: "$8,000",
      image: "🏛️",
      rating: 4.6,
      description: "Modern convention center with flexible spaces",
    },
    {
      id: 3,
      name: "Garden Villa Estate",
      category: "outdoor",
      location: "Suburbs",
      capacity: "200 guests",
      price: "$3,500",
      image: "🏡",
      rating: 4.9,
      description: "Beautiful outdoor venue with garden settings",
    },
    {
      id: 4,
      name: "Tech Innovation Hub",
      category: "conference",
      location: "Business District",
      capacity: "300 guests",
      price: "$4,500",
      image: "🏢",
      rating: 4.7,
      description: "Modern tech-focused conference facility",
    },
    {
      id: 5,
      name: "Seaside Resort",
      category: "hotel",
      location: "Coastal",
      capacity: "400 guests",
      price: "$6,500",
      image: "🌊",
      rating: 4.9,
      description: "Breathtaking oceanfront resort venue",
    },
    {
      id: 6,
      name: "Urban Rooftop Lounge",
      category: "outdoor",
      location: "City Center",
      capacity: "150 guests",
      price: "$2,800",
      image: "🌃",
      rating: 4.5,
      description: "Trendy rooftop venue with city views",
    },
  ];

  const categories = [
    { id: "all", name: "All Venues" },
    { id: "hotel", name: "Hotels" },
    { id: "convention", name: "Convention Centers" },
    { id: "outdoor", name: "Outdoor Venues" },
    { id: "conference", name: "Conference Rooms" },
  ];

  const filteredVenues =
    selectedCategory === "all"
      ? venues
      : venues.filter((venue) => venue.category === selectedCategory);

  return (
    <div className="venue-page">
      {/* Hero Section */}
      <section className="venue-hero">
        <div className="hero-content">
          <h1>Find Your Perfect Venue</h1>
          <p>Discover amazing venues for your next event</p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="venues-section">
        <div className="container">
          <div className="venues-grid">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="venue-card">
                <div className="venue-image">
                  <span className="venue-icon">{venue.image}</span>
                </div>
                <div className="venue-content">
                  <div className="venue-header">
                    <h3>{venue.name}</h3>
                    <div className="venue-rating">
                      <span className="stars">
                        {"★".repeat(Math.floor(venue.rating))}
                      </span>
                      <span className="rating-text">{venue.rating}</span>
                    </div>
                  </div>
                  <p className="venue-description">{venue.description}</p>
                  <div className="venue-details">
                    <div className="detail-item">
                      <span className="detail-label">📍</span>
                      <span>{venue.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">👥</span>
                      <span>{venue.capacity}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">💰</span>
                      <span>{venue.price}</span>
                    </div>
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .venue-page {
          width: 100%;
        }

        .venue-hero {
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

        .filters-section {
          padding: 40px 20px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .filters {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: white;
          border: 2px solid #e0e0e0;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
        }

        .filter-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .filter-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .venues-section {
          padding: 60px 20px;
        }

        .venues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .venue-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .venue-card:hover {
          transform: translateY(-5px);
        }

        .venue-image {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .venue-icon {
          font-size: 4rem;
        }

        .venue-content {
          padding: 25px;
        }

        .venue-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .venue-header h3 {
          font-size: 1.3rem;
          color: #333;
          margin: 0;
        }

        .venue-rating {
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

        .venue-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .venue-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #555;
        }

        .detail-label {
          font-size: 1.1rem;
        }

        .view-details-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          width: 100%;
          transition: background 0.3s;
        }

        .view-details-btn:hover {
          background: #5a6fd8;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }

          .venues-grid {
            grid-template-columns: 1fr;
          }

          .filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Venue;
