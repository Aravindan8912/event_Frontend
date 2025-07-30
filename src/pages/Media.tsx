import { useState } from "react";

const Media = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  const galleryItems = [
    {
      id: 1,
      title: "Corporate Conference 2023",
      category: "corporate",
      image: "🏢",
      description: "Annual tech conference with 500+ attendees",
    },
    {
      id: 2,
      title: "Wedding Celebration",
      category: "wedding",
      image: "💒",
      description: "Beautiful outdoor wedding ceremony",
    },
    {
      id: 3,
      title: "Product Launch Event",
      category: "corporate",
      image: "🚀",
      description: "Innovative product launch with live demos",
    },
    {
      id: 4,
      title: "Birthday Party",
      category: "social",
      image: "🎉",
      description: "Milestone birthday celebration",
    },
    {
      id: 5,
      title: "Charity Gala",
      category: "charity",
      image: "🎗️",
      description: "Annual charity fundraising event",
    },
    {
      id: 6,
      title: "Music Festival",
      category: "entertainment",
      image: "🎵",
      description: "Three-day music festival with 10,000+ attendees",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "EventPro Success Story",
      duration: "3:45",
      thumbnail: "🎬",
      description: "How we transformed a corporate event",
    },
    {
      id: 2,
      title: "Behind the Scenes",
      duration: "5:20",
      thumbnail: "🎥",
      description: "A day in the life of our event planners",
    },
    {
      id: 3,
      title: "Client Testimonials",
      duration: "4:15",
      thumbnail: "📹",
      description: "What our clients say about us",
    },
    {
      id: 4,
      title: "Event Planning Tips",
      duration: "6:30",
      thumbnail: "💡",
      description: "Expert tips for successful event planning",
    },
  ];

  const pressReleases = [
    {
      id: 1,
      title: "EventPro Expands to International Markets",
      date: "March 15, 2024",
      excerpt:
        "EventPro announces expansion into European markets with new partnerships and enhanced services.",
      category: "Company News",
    },
    {
      id: 2,
      title: "New Digital Platform Launch",
      date: "February 28, 2024",
      excerpt:
        "EventPro launches revolutionary digital platform for seamless event planning and management.",
      category: "Technology",
    },
    {
      id: 3,
      title: "Industry Award Recognition",
      date: "January 20, 2024",
      excerpt:
        "EventPro receives 'Best Event Planning Company' award at the Annual Event Industry Awards.",
      category: "Awards",
    },
    {
      id: 4,
      title: "Partnership with Luxury Venues",
      date: "December 10, 2023",
      excerpt:
        "EventPro partners with premium venues across the country to offer exclusive event locations.",
      category: "Partnerships",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "gallery":
        return (
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <span className="gallery-icon">{item.image}</span>
                </div>
                <div className="gallery-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        );
      case "videos":
        return (
          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-item">
                <div className="video-thumbnail">
                  <span className="video-icon">{video.thumbnail}</span>
                  <div className="play-button">▶</div>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-content">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case "press":
        return (
          <div className="press-list">
            {pressReleases.map((release) => (
              <div key={release.id} className="press-item">
                <div className="press-header">
                  <span className="press-category">{release.category}</span>
                  <span className="press-date">{release.date}</span>
                </div>
                <h3>{release.title}</h3>
                <p>{release.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="media-page">
      {/* Hero Section */}
      <section className="media-hero">
        <div className="hero-content">
          <h1>Media & Gallery</h1>
          <p>Explore our latest events, videos, and press coverage</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === "gallery" ? "active" : ""}`}
              onClick={() => setActiveTab("gallery")}
            >
              📸 Gallery
            </button>
            <button
              className={`tab-btn ${activeTab === "videos" ? "active" : ""}`}
              onClick={() => setActiveTab("videos")}
            >
              🎥 Videos
            </button>
            <button
              className={`tab-btn ${activeTab === "press" ? "active" : ""}`}
              onClick={() => setActiveTab("press")}
            >
              📰 Press
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">{renderContent()}</div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Media Inquiries</h2>
          <p>
            For press inquiries, interviews, or media requests, please contact
            our PR team.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>press@eventpro.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Social Media</h4>
                <p>@EventProOfficial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .media-page {
          width: 100%;
        }

        .media-hero {
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

        .tabs-section {
          padding: 40px 20px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: white;
          border: 2px solid #e0e0e0;
          padding: 15px 30px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s;
        }

        .tab-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .tab-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .content-section {
          padding: 60px 20px;
        }

        /* Gallery Styles */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .gallery-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
        }

        .gallery-image {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .gallery-icon {
          font-size: 4rem;
        }

        .gallery-content {
          padding: 25px;
        }

        .gallery-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 10px;
        }

        .gallery-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .gallery-category {
          background: #667eea;
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Videos Styles */
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .video-item {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .video-item:hover {
          transform: translateY(-5px);
        }

        .video-thumbnail {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .video-icon {
          font-size: 4rem;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.9);
          color: #667eea;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .play-button:hover {
          background: white;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .video-duration {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 10px;
          font-size: 0.9rem;
        }

        .video-content {
          padding: 25px;
        }

        .video-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 10px;
        }

        .video-content p {
          color: #666;
          line-height: 1.6;
        }

        /* Press Styles */
        .press-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .press-item {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .press-item:hover {
          transform: translateY(-5px);
        }

        .press-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .press-category {
          background: #667eea;
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .press-date {
          color: #666;
          font-size: 0.9rem;
        }

        .press-item h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 15px;
        }

        .press-item p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
        }

        .read-more-btn:hover {
          background: #5a6fd8;
        }

        /* Contact Section */
        .contact-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .contact-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #333;
        }

        .contact-section p {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .contact-item {
          background: white;
          padding: 30px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          font-size: 2rem;
        }

        .contact-item h4 {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 5px;
        }

        .contact-item p {
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }

          .tabs {
            flex-direction: column;
            align-items: center;
          }

          .tab-btn {
            width: 200px;
          }

          .gallery-grid,
          .videos-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Media;
