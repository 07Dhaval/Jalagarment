import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  Ruler,
  Briefcase,
  Globe,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Downloads.css";

const downloads = [
  {
    icon: <FileText size={26} />,
    title: "Company Profile PDF",
    description:
      "Complete overview of JALA GARMENT and our services",
    size: "2.4 MB"
  },
  {
    icon: <BookOpen size={26} />,
    title: "Product Catalog PDF",
    description:
      "Full denim products catalog with specifications",
    size: "8.7 MB"
  },
  {
    icon: <Ruler size={26} />,
    title: "Size Charts PDF",
    description:
      "Detailed size charts for Men, Women & Kids",
    size: "1.2 MB"
  },
  {
    icon: <Briefcase size={26} />,
    title: "Business Card PDF",
    description:
      "Contact information and company details",
    size: "0.5 MB"
  },
  {
    icon: <Globe size={26} />,
    title: "Export Capability Profile PDF",
    description:
      "Our export capabilities and experience",
    size: "3.1 MB"
  }
];

export default function Downloads() {
  return (
    <div className="downloads-page">

      {/* HERO */}

      <section className="downloads-hero">
        <div className="container">

          <h1>Download Center</h1>

          <p>
            Download our catalogs, profiles, and documentation
          </p>

        </div>
      </section>

      {/* DOWNLOAD GRID */}

      <section className="downloads-section">
        <div className="container">

          <div className="downloads-grid">

            {downloads.map((item, index) => (
              <motion.div
                key={index}
                className="download-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >

                <div className="download-icon">
                  {item.icon}
                </div>

                <div className="download-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="download-footer">

                    <span>Size: {item.size}</span>

                    <button>
                      <Download size={14} />
                      Download
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="download-cta">
        <div className="container">

          <div className="cta-box">

            <h2>Need More Information?</h2>

            <p>
              Contact us for custom catalogs or specific
              product information
            </p>

            <Link
              to="/contact"
              className="cta-btn"
            >
              Contact Us
            </Link>

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

    </div>
  );
}