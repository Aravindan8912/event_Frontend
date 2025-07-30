import React from "react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "👩‍💼",
      bio: "10+ years in event management with a passion for creating unforgettable experiences.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head of Operations",
      image: "👨‍💼",
      bio: "Expert in logistics and operations with a track record of successful large-scale events.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Creative Director",
      image: "👩‍🎨",
      bio: "Award-winning designer specializing in event aesthetics and brand experiences.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Technology Lead",
      image: "👨‍💻",
      bio: "Innovative tech solutions for modern event planning and management.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to revolutionize event planning",
    },
    {
      year: "2019",
      title: "First 100 Events",
      description: "Successfully planned and executed 100 events",
    },
    {
      year: "2020",
      title: "Digital Platform Launch",
      description: "Launched our comprehensive digital platform",
    },
    {
      year: "2021",
      title: "500+ Events Milestone",
      description: "Reached 500 successful events milestone",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Expanded services to multiple countries",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards and recognition",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About EventPro</h1>
          <p>Transforming events into unforgettable experiences since 2018</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At EventPro, we believe that every event has the potential to
                create lasting memories and meaningful connections. Our mission
                is to provide innovative, reliable, and personalized event
                planning solutions that exceed expectations and bring visions to
                life.
              </p>
              <p>
                We combine creativity with technology, tradition with
                innovation, and local expertise with global standards to deliver
                exceptional events that leave a lasting impression.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Events Planned</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Premium Venues</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Trusted Suppliers</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every detail, ensuring the highest
                quality standards in all our services.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>
                Building lasting relationships through transparency,
                reliability, and consistent delivery.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                Embracing new technologies and creative solutions to enhance the
                event experience.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>
                Our passion for events drives us to go above and beyond for
                every client and project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <span className="member-icon">{member.image}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{milestone.year}</h3>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's create something amazing together</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          width: 100%;
        }

        .about-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        .mission-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .mission-text h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #333;
        }

        .mission-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 20px;
        }

        .mission-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .stat-item {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .stat-item h3 {
          font-size: 2.5rem;
          color: #667eea;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .stat-item p {
          color: #666;
          font-weight: 500;
        }

        .values-section {
          padding: 80px 20px;
        }

        .values-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 60px;
          color: #333;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .value-card {
          text-align: center;
          padding: 40px 30px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .value-card:hover {
          transform: translateY(-10px);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #333;
        }

        .value-card p {
          color: #666;
          line-height: 1.6;
        }

        .team-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .team-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 60px;
          color: #333;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .team-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .member-image {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .member-icon {
          font-size: 3rem;
        }

        .team-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .member-position {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .member-bio {
          color: #666;
          line-height: 1.6;
        }

        .timeline-section {
          padding: 80px 20px;
        }

        .timeline-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 60px;
          color: #333;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #667eea;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: 0;
          margin-right: 60px;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 60px;
          margin-right: 0;
          text-align: left;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 20px;
          width: 20px;
          height: 20px;
          background: #667eea;
          border-radius: 50%;
          transform: translateX(-50%);
          border: 4px solid white;
          box-shadow: 0 0 0 3px #667eea;
        }

        .timeline-content {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .timeline-content h3 {
          font-size: 2rem;
          color: #667eea;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .timeline-content h4 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 10px;
        }

        .timeline-content p {
          color: #666;
          line-height: 1.6;
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
            font-size: 2.5rem;
          }

          .mission-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .mission-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-marker {
            left: 20px;
          }

          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            margin-left: 60px;
            margin-right: 0;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
