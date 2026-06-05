import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle,
  Package,
  Tag,
  FileText,
  Ship
} from "lucide-react";
import { Link } from "react-router-dom";

import "./ExportServices.css";

const services = [
  {
    icon: <Search size={30} />,
    title: "Product Sourcing",
    desc: "Access to premium denim manufacturers across India with quality verification"
  },
  {
    icon: <CheckCircle size={30} />,
    title: "Quality Inspection",
    desc: "Rigorous quality checks at every stage of production"
  },
  {
    icon: <Package size={30} />,
    title: "Sample Development",
    desc: "Fast sample creation and modification as per your requirements"
  },
  {
    icon: <Tag size={30} />,
    title: "Private Label Manufacturing",
    desc: "Complete customization with your brand identity"
  },
  {
    icon: <FileText size={30} />,
    title: "Export Documentation",
    desc: "Complete assistance with all export paperwork and customs"
  },
  {
    icon: <Ship size={30} />,
    title: "Shipping Coordination",
    desc: "Efficient logistics management to your destination"
  }
];

const ExportServices = () => {
  return (
    <motion.div
      className="export-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="export-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Export Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive support for international buyers sourcing denim
            products from India.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="export-assistance">
        <div className="container">
          <div className="assistance-box">
            <h2>Need Export Assistance?</h2>

            <p>Contact our export team for personalized support.</p>

            <Link to="/contact" className="contact-btn">
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Banner */}
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

export default ExportServices;