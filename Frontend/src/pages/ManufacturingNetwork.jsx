import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./ManufacturingNetwork.css";

import {
  Factory,
  Eye,
  Check,
  FileText
} from "lucide-react";

const features = [
  {
    icon: <Factory size={55} />,
    title: "Factory Audits",
    desc: "Regular verification of manufacturing facilities"
  },
  {
    icon: <Eye size={55} />,
    title: "Production Monitoring",
    desc: "Continuous oversight of manufacturing process"
  },
  {
    icon: <Check size={55} />,
    title: "Quality Inspection",
    desc: "Strict quality control at every stage"
  },
  {
    icon: <FileText size={55} />,
    title: "Export Documentation",
    desc: "Complete paperwork management"
  }
];
export default function ManufacturingNetwork() {
  return (
    <motion.div
      className="manufacturing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* HERO */}

      <section className="manufacturing-hero">
        <div className="container">
          <h1>Manufacturing Network</h1>

          <p>
            JALA GARMENT works with trusted Indian manufacturing partners for
            producing export-quality denim garments
          </p>
        </div>
      </section>

      {/* FEATURES */}

    <section className="manufacturing-features">
  <div className="container">

    <div className="manufacturing-grid">
      {features.map((item, index) => (
        <div className="manufacturing-item" key={index}>
          <div className="manufacturing-icon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <p>{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* PROCESS */}

      <section className="manufacturing-process">
        <div className="container">
          <div className="process-box">
            <h2>Our Manufacturing Process</h2>

            <p>
              As a merchant exporter, JALA GARMENT maintains strong
              relationships with carefully selected denim manufacturing units
              across India. Our network includes specialized facilities for
              men's, women's, and kids' denim wear.
            </p>

            <p>
              Each manufacturing partner undergoes rigorous evaluation and
              regular audits to ensure consistent quality and ethical practices.
              We monitor every stage of production from fabric sourcing to final
              packaging.
            </p>

            <p>
              This approach allows us to maintain competitive pricing while
              ensuring the highest quality standards for our international
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* PREMIUM BANNER */}

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
}
