import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-brand">
            <h2>JALAGARMENT</h2>

            <p>
              Premium Garment Merchant Exporter from India. Delivering
              world-class quality with reliability and specialized focus on
              global markets.
            </p>

            <div className="social-icons">
              <a href="#">
                <Instagram size={28} />
              </a>

              <a href="#">
                <Facebook size={28} />
              </a>

              <a href="#">
                <Twitter size={28} />
              </a>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <Shield size={20} />
              </div>

              <div>
                <h4>14+ Years</h4>
                <span>OF EXPORT EXCELLENCE</span>
              </div>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h3>EXPLORE</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Garment Products</Link></li>
              <li><Link to="/markets">Global Markets</Link></li>
              <li><Link to="/services">Export Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* MARKETS */}
          <div className="footer-column">
            <h3>MARKETS</h3>

            <ul>
              <li>Japan</li>
              <li>UAE</li>
              <li>Europe</li>
              <li>USA</li>
              <li>Global</li>
            </ul>
          </div>

          {/* CONTACT CARD */}
          <div className="footer-contact">
            <h3>CONTACT US</h3>

            <div className="contact-card">
              <div className="contact-header">
                <h4>Mitul Thakkar</h4>
                <span>Director</span>
              </div>

              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <small>PHONE & WHATSAPP</small>
                  <p>+91 97140 92106</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <small>EMAIL ADDRESS</small>
                  <p>williamhills70@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <small>HEADQUARTERS</small>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Jalagarment. All rights reserved.
          </p>

          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Term of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;