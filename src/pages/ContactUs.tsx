import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [selectedDepartment, setSelectedDepartment] = useState("general");

  const departments = [
    { id: "general", name: "General Inquiry", icon: "📧" },
    { id: "sales", name: "Sales & Pricing", icon: "💰" },
    { id: "support", name: "Technical Support", icon: "🔧" },
    { id: "partnership", name: "Partnership", icon: "🤝" },
    { id: "media", name: "Media & Press", icon: "📰" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Event Street, Suite 100<br/>New York, NY 10001",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+1 (555) 123-4567<br/>Mon-Fri: 9AM-6PM EST",
    },
    {
      icon: "📧",
      title: "Email",
      details: "info@eventpro.com<br/>support@eventpro.com",
    },
    {
      icon: "🌐",
      title: "Website",
      details: "www.eventpro.com<br/>Available 24/7",
    },
  ];

  const faqs = [
    {
      question: "How much does event planning cost?",
      answer:
        "Our pricing varies based on event size, complexity, and services required. We offer customized quotes for each project.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 3-6 months in advance for large events, and 1-3 months for smaller gatherings.",
    },
    {
      question: "Do you handle all types of events?",
      answer:
        "Yes! We specialize in corporate events, weddings, parties, conferences, and everything in between.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve the greater New York area and surrounding regions. Contact us for specific location details.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Let's start planning your perfect event!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: info.details }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Department</label>
                  <div className="department-selector">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        type="button"
                        className={`dept-btn ${
                          selectedDepartment === dept.id ? "active" : ""
                        }`}
                        onClick={() => setSelectedDepartment(dept.id)}
                      >
                        <span className="dept-icon">{dept.icon}</span>
                        <span>{dept.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="faq-container">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Visit Our Office</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3>Interactive Map</h3>
              <p>Click to view our location and get directions</p>
              <button className="map-btn">Open in Maps</button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          width: 100%;
        }

        .contact-hero {
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

        .contact-info-section {
          padding: 60px 20px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .contact-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .contact-card h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 15px;
        }

        .contact-card p {
          color: #666;
          line-height: 1.6;
        }

        .main-contact-section {
          padding: 80px 20px;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }

        .contact-form-container h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #333;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group label {
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
        }

        .department-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }

        .dept-btn {
          background: white;
          border: 2px solid #e0e0e0;
          padding: 12px 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .dept-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .dept-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .dept-icon {
          font-size: 1.2rem;
        }

        .submit-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 20px;
        }

        .submit-btn:hover {
          background: #5a6fd8;
        }

        .faq-container h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #333;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .faq-item {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .faq-item h3 {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 10px;
        }

        .faq-item p {
          color: #666;
          line-height: 1.6;
        }

        .map-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .map-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
        }

        .map-placeholder {
          background: white;
          border-radius: 15px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .map-content {
          text-align: center;
        }

        .map-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .map-content h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .map-content p {
          color: #666;
          margin-bottom: 20px;
        }

        .map-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
        }

        .map-btn:hover {
          background: #5a6fd8;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .department-selector {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
