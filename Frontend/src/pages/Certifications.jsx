import React from "react";
import { motion } from "framer-motion";
import {
  FileBadge,
  Receipt,
  Building2,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Certifications.css";

const certifications = [
  {
    icon: <FileBadge size={28} />,
    title: "IEC Certificate",
    subtitle: "IMPORT EXPORT CODE",
    description:
      "Officially registered and authorized by the Government of India for international trade and denim merchant exports.",
  },
  {
    icon: <Receipt size={28} />,
    title: "GST Registration",
    subtitle: "TAX COMPLIANCE",
    description:
      "Fully compliant with Indian Goods and Services Tax laws, ensuring transparent and legally sound business operations.",
  },
  {
    icon: <Building2 size={28} />,
    title: "MSME Registration",
    subtitle: "ENTERPRISE RECOGNITION",
    description:
      "Officially recognized under the Ministry of Micro, Small & Medium Enterprises, backing our operational credibility.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Export Memberships",
    subtitle: "TRADE COUNCILS",
    description:
      "Proud member of key Indian export promotion councils, adhering to the highest international quality standards.",
  },
];

export default function Certifications() {
  return (
    <div className="certifications-page">
      {/* HERO */}

      <section className="cert-hero">
        <div className="container">
          <span className="cert-badge">
            Government of India Recognized Exporter
          </span>

          <h1>
            Certifications & <span>Trust</span>
          </h1>

          <p>
            Our business operations are fully compliant, transparent, and backed
            by official government certifications and industry registrations.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section className="cert-section">
        <div className="container">
          <div className="cert-grid">
            {certifications.map((item, index) => (
              <motion.div
                className="cert-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="cert-top">
                  <div className="cert-icon">{item.icon}</div>

                  <div className="verified">
                    <CheckCircle size={14} />
                    ACTIVE & VERIFIED
                  </div>
                </div>

                <span className="cert-subtitle">{item.subtitle}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST COPIES */}

      <section className="request-section">
        <div className="container">
          <div className="request-box">
            <div>
              <h2>Request Official Copies</h2>

              <p>
                For vendor registration or due diligence, we provide verified
                copies of all our certifications to our buyers.
              </p>
            </div>

            <div className="request-buttons">
              <a href="mailto:williamhills70@gmail.com" className="email-btn">
                Email Request
              </a>

              <a
                href="https://wa.me/919714092106"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                WhatsApp Us
              </a>
            </div>
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
