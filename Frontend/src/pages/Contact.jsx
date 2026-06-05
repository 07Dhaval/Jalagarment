import React, { useState, useContext } from "react";
import { Mail, Phone, MapPin, MessageCircle, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const { settings } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/inquiries", formData);
      setSuccess(true);
      setFormData({ name: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send message");
    }
    setLoading(false);
  };

  const whatsappNumber = settings?.whatsappNumber || "9714092106";
  const companyEmail = settings?.companyEmail || "williamhills70@gmail.com";
  const companyPhone = settings?.companyPhone || "+91 9714092106";
  const companyAddress =
    settings?.companyAddress || "Ahmedabad, Gujarat, India";

  return (
    <motion.div
      className="contact-page-new"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero-new">
        <div className="container" style={{ fontWeight: "bold" }}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to discuss your requirements? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-cards">
        <div className="container" style={{ fontWeight: "bold" }}>
          <div className="info-cards-grid">
            <div className="info-card-new">
              <Mail size={24} />
              <h3>Send Email</h3>
              <p>{companyEmail}</p>
            </div>
            <div className="info-card-new">
              <Phone size={24} />
              <h3>Call Us Now</h3>
              <p>{companyPhone}</p>
            </div>
            <div className="info-card-new">
              <MapPin size={24} />
              <h3>Location</h3>
              <p>{companyAddress}</p>
            </div>
            <div className="info-card-new">
              <Headphones size={24} />
              <h3>Update Info</h3>
              <p>24/7 support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image and Contact Form Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            {/* LEFT FORM */}

            <div className="contact-form-card">
              <h2>Send a Message</h2>

              {success && (
                <div className="success-alert-new">
                  Message sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row-new">
                  <div className="form-group">
                    <label>Enter Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Write Your message</label>
                  <textarea
                    rows="8"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  Subscribe
                </button>
              </form>
            </div>

            {/* RIGHT COMPANY CARD */}

            <div className="company-details-card">
              <h2>Company Details</h2>

              <div className="company-item">
                <span>Company</span>
                <h4>JALA GARMENT</h4>
              </div>

              <div className="company-item">
                <span>Contact Person</span>
                <h4>Mitul Thakkar</h4>
              </div>

              <div className="company-item">
                <span>Designation</span>
                <h4>Merchant Exporter – India</h4>
              </div>

              <div className="company-item">
                <span>WhatsApp</span>
                <h4>{companyPhone}</h4>
              </div>

              <div className="company-item">
                <span>Email</span>
                <h4>{companyEmail}</h4>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-company-btn"
              >
                <MessageCircle size={20} />
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Quick Enquiry Section - Side by Side */}
      <section className="quick-enquiry-section">
        <div className="container">
          <div className="quick-enquiry-card">
            <h2>Quick Enquiry</h2>

            <p>
              The fastest way to reach us is through WhatsApp. Click below to
              start a conversation and get instant responses.
            </p>

            <div className="quick-enquiry-buttons">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-cta"
              >
                WhatsApp Chat
              </a>

              <a href={`mailto:${companyEmail}`} className="btn-email-cta">
                Email Inquiry
              </a>
            </div>

            <div className="quick-email">
              Or email us at <span>{companyEmail}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-banner-sectionn">
        <div className="container" style={{ margin: "0px 100px" }}>
          <div className="premium-banner-contentt">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>
                Premium Export
                <br />
                Quality
              </h2>
              <p>
                Serving international markets with quality garments since 2010.
                Trusted by 500+ clients across 25+ countries.
              </p>
              <Link to="/catalog" className="btn-view-collection">
                VIEW COLLECTION
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
