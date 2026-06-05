import React from "react";
import {
  Package,
  Globe,
  MessageCircle,
  ShieldCheck,
  Award,
  CheckCircle,
  Factory,
  TrendingUp,
  FileText,
  Handshake,
  Target,
  Box,
  BadgeCheck,
  Ship,
  Scissors,
  BadgeDollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import CountUp from "react-countup";
import "./About.css";

const About = () => {
  const markets = [
    { code: "IN", name: "India", region: "SOUTH ASIA" },
    { code: "AE", name: "UAE", region: "MIDDLE EAST" },
    { code: "GB", name: "UK", region: "EUROPE" },
    { code: "DE", name: "Germany", region: "EUROPE" },
    { code: "FR", name: "France", region: "EUROPE" },
    { code: "US", name: "USA", region: "NORTH AMERICA" },
    { code: "CA", name: "Canada", region: "NORTH AMERICA" },
    { code: "AU", name: "Australia", region: "OCEANIA" },
    { code: "JP", name: "Japan", region: "ASIA PACIFIC" },
    { code: "SG", name: "Singapore", region: "ASIA PACIFIC" },
    { code: "SA", name: "Saudi Arabia", region: "MIDDLE EAST" },
    { code: "ZA", name: "South Africa", region: "AFRICA" },
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      desc: "International standard for Quality Management Systems (QMS).",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "OEKO-TEX®",
      desc: "Standard 100 certification for textile products free from harmful substances.",
      icon: <Award size={32} />,
    },
    {
      title: "GOTS",
      desc: "Global Organic Textile Standard for organic fibers and sustainable processing.",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "SEDEX",
      desc: "Empowering responsible supply chains through ethical data sharing.",
      icon: <Globe size={32} />,
    },
    {
      title: "WRAP",
      desc: "Worldwide Responsible Accredited Production for ethical manufacturing.",
      icon: <Package size={32} />,
    },
  ];

  const officialCertificates = [
    {
      title: "Import Export Code (IEC)",
      desc: "Government of India issued Importer-Exporter Code.",
      img: "/src/assets/cert-iec.png",
    },
    {
      title: "Import Export Management",
      desc: "Professional certification in global trade operations.",
      img: "/src/assets/cert-iii-em.png",
    },
    {
      title: "Industrial Development",
      desc: "Certification for specialized industrial manufacturing.",
      img: "/src/assets/cert-iid.png",
    },
  ];

  const exportServices = [
    {
      icon: <Box size={26} />,
      title: "Product Sourcing",
      points: [
        "Factory selection & verification",
        "Quality benchmarking",
        "Competitive price negotiation",
        "Sample development",
      ],
    },
    {
      icon: <BadgeCheck size={26} />,
      title: "Quality Assurance",
      points: [
        "Pre-production inspection",
        "In-line quality checks",
        "Final inspection",
        "Testing & certification",
      ],
    },
    {
      icon: <FileText size={26} />,
      title: "Documentation",
      points: [
        "Export licenses & permits",
        "Commercial invoices",
        "Certificate of Origin",
        "Customs clearance",
      ],
    },
    {
      icon: <Ship size={26} />,
      title: "Logistics Management",
      points: [
        "Sea & air freight",
        "Container optimization",
        "Shipment tracking",
        "Door-to-door delivery",
      ],
    },
    {
      icon: <Scissors size={26} />,
      title: "Private Labeling",
      points: [
        "Custom brand development",
        "Label & tag design",
        "Packaging customization",
        "Hangtag printing",
      ],
    },
    {
      icon: <BadgeDollarSign size={26} />,
      title: "Payment Solutions",
      points: [
        "Letter of Credit (LC)",
        "Flexible payment terms",
        "Bank guarantees",
        "Currency exchange",
      ],
    },
  ];

  const manufacturingHubs = [
    {
      title: "Gujarat Manufacturing Hub",
      desc: "State-of-the-art facilities in Ahmedabad and Surat specializing in premium garment production with advanced weaving and finishing technologies.",
    },
    {
      title: "Tamil Nadu Production Centers",
      desc: "Garment manufacturing units in Tirupur and Chennai known for quality stitching, washing and finishing for export markets.",
    },
    {
      title: "Delhi NCR Fashion Units",
      desc: "Design-focused facilities near Delhi offering trend-driven garment styles, sampling services and quick prototype development.",
    },
    {
      title: "Maharashtra Denim Mills",
      desc: "Large-scale production facilities in Mumbai and Pune with capacity for bulk orders and consistent quality control systems.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Factory size={28} />,
      title: "Direct Connection",
      desc: "Merchant exporter status gives you direct access to India's top-tier garment manufacturers with complete quality assurance.",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Sourcing",
      desc: "Extensive network for premium fabrics, trims, and expert manufacturing facilities nationwide.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Competitive Edge",
      desc: "Best value through optimized sourcing, scale economies, and highly efficient export processes.",
    },
    {
      icon: <FileText size={28} />,
      title: "Paperwork Handled",
      desc: "Complete stress-free assistance with all export documentation, compliances and customs procedures.",
    },
    {
      icon: <Handshake size={28} />,
      title: "Dedicated Support",
      desc: "Personal, round-the-clock assistance throughout sourcing, manufacturing and shipping lifecycle.",
    },
    {
      icon: <Target size={28} />,
      title: "Long-Term Vision",
      desc: "We prioritize building lasting relationships based on trust, consistency and quality.",
    },
  ];
  const whyIndia = [
    {
      icon: <Award size={28} />,
      title: "Quality Textile Heritage",
      desc: "Centuries-old textile tradition with world-class cotton production and modern denim manufacturing expertise.",
    },
    {
      icon: <BadgeDollarSign size={28} />,
      title: "Cost-Effective",
      desc: "Competitive manufacturing costs and economies of scale without compromising on quality standards.",
    },
    {
      icon: <Box size={28} />,
      title: "Flexible Manufacturing",
      desc: "Capabilities for both large-scale bulk orders and smaller customized batches with quick turnarounds.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Global Compliance",
      desc: "Adherence to international standards including OEKO-TEX, GOTS, and ISO certifications.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Sustainable Practices",
      desc: "Growing focus on eco-friendly production, organic cotton, and sustainable dyeing processes.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Design Innovation",
      desc: "Access to trend forecasters developing contemporary styles for international markets.",
    },
  ];
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero-new">
        <div className="hero-overlay"></div>

        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">TRUSTED MERCHANT EXPORTER</span>

            <h1>
              About <span>JALA</span> GARMENT
            </h1>

            <p className="hero-subtitle-new">
              Leading merchant exporter of premium denim products from India,
              bridging the gap between quality manufacturing and global market
              demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="company-story-section">
        <div className="container">
          <div className="story-card">
            <div className="story-image">
              <img
                src="/public/assets/women-category.png"
                alt="women-category"
              />
            </div>

            <div className="story-content">
              <h2>Crafting Excellence Since 2010</h2>

              <p>
                JALA GARMENT is a premier Merchant Exporter from India,
                specializing in high-quality denim products for international
                markets.
              </p>

              <p>
                We export Men's, Women's & Kids' Denim Wear to clients across
                Japan, UAE, and Europe, providing OEM & Private Label
                Manufacturing services with custom branding options.
              </p>

              <p>
                With over 14 years of export experience, we have built a
                reputation for quality, reliability, and competitive pricing in
                the global denim market.
              </p>

              <div className="story-features">
                <div className="feature-box">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h4>Merchant Exporter from India</h4>
                    <span>
                      Connecting international buyers with quality Indian
                      manufacturers
                    </span>
                  </div>
                </div>

                <div className="feature-box">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h4>OEM & Private Label Manufacturing</h4>
                    <span>Complete customization with your brand identity</span>
                  </div>
                </div>

                <div className="feature-box">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h4>Export Focus: Japan, UAE & Europe</h4>
                    <span>Specialized understanding of these key markets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <h3>
                <CountUp end={14} duration={3} />+
              </h3>
              <span>YEARS OF EXPORT</span>
            </div>

            <div className="about-stat-item">
              <h3>
                <CountUp end={500} duration={3} />+
              </h3>
              <span>GLOBAL CLIENTS</span>
            </div>

            <div className="about-stat-item">
              <h3>
                <CountUp end={25} duration={3} />+
              </h3>
              <span>COUNTRIES SERVED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Official Documentation Section */}
      {/* <section className="official-docs-section section-padding">
        <div className="container">
          <div className="section-header-centered">
            <span className="subtitle">OFFICIAL CLEARANCE</span>
            <h2>Verification & Compliance</h2>
            <p>
              We operate with full governmental transparency and international
              trade adherence.
            </p>
          </div>

          <div className="official-certs-grid">
            {officialCertificates.map((cert, index) => (
              <motion.div
                key={index}
                className="official-cert-card glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="official-cert-img">
                  <img src={cert.img} alt={cert.title} />
                  <div className="img-overlay">
                    <Link to={cert.img} target="_blank" className="view-btn">
                      View Original
                    </Link>
                  </div>
                </div>
                <div className="official-cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industry Standards Section */}
      {/* <section className="certifications-section section-padding">
        <div className="container">
          <div className="section-header-centered">
            <span className="subtitle">TRUSTED QUALITY</span>
            <h2>Industry Certifications</h2>
            <p>
              Our commitment to excellence is backed by globally recognized
              certifications.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Markets We Serve Section */}
      {/* <section className="markets-section-new">
        <div className="container">
          <div className="markets-header-new">
            <div className="global-tag">
              <Globe size={20} />
              <span>GLOBAL REACH</span>
            </div>
            <h2>Markets We Serve</h2>
            <p>
              Delivering premium textile exports to clients across the globe
            </p>
          </div>

          <div className="markets-grid-new">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                className="market-card-new"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="market-code">{market.code}</span>
                <span className="market-name">{market.name}</span>
                <span className="market-region">{market.region}</span>
              </motion.div>
            ))}
          </div>

          <div className="markets-footer-new">
            <p>
              And many more countries across <span>25+ nations</span> worldwide
            </p>
          </div>
        </div>
      </section> */}
      <section className="why-india-section">
        <div className="container">
          <div className="why-india-header">
            <h2>Why Buy Denim From India?</h2>

            <p>
              India combines a rich textile heritage with modern technology to
              deliver world-class denim products at competitive prices.
            </p>
          </div>

          <div className="why-india-grid">
            {whyIndia.map((item, index) => (
              <motion.div
                key={index}
                className="why-india-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="why-india-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="manufacturing-network-section">
        <div className="manufacturing-overlay">
          <div className="container">
            <div className="manufacturing-header">
              <h2>Our Manufacturing Network</h2>

              <p>
                JALA GARMENT has established strategic partnerships with India's
                leading garment manufacturers across major textile hubs
              </p>
            </div>

            <div className="manufacturing-grid">
              {manufacturingHubs.map((hub, index) => (
                <motion.div
                  key={index}
                  className="manufacturing-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>
                    <MapPin size={22} />
                    {hub.title}
                  </h3>

                  <p>{hub.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="manufacturing-divider"></div>
            <div className="manufacturing-stats">
              <div className="stat-item">
                <h4>50+</h4>
                <span>PARTNER FACTORIES</span>
              </div>

              <div className="divider"></div>

              <div className="stat-item">
                <h4>100K+</h4>
                <span>MONTHLY CAPACITY</span>
              </div>

              <div className="divider"></div>

              <div className="stat-item">
                <h4>ISO 9001</h4>
                <span>QUALITY CERTIFIED</span>
              </div>

              <div className="divider"></div>

              <div className="stat-item">
                <h4>4-6 Wks</h4>
                <span>AVERAGE LEAD TIME</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="export-services-section">
        <div className="container">
          <div className="export-services-header">
            <h2>Complete Export Services</h2>

            <p>
              End-to-end export solutions covering every aspect of international
              garment trade, ensuring a seamless experience for our buyers.
            </p>
          </div>

          <div className="export-services-grid">
            {exportServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <ul>
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Premium Export Quality Banner */}
      <section className="premium-banner-about">
        <div className="container">
          <div className="premium-content-about">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Premium Export Quality</h2>
              <p>
                Serving international markets with quality garments since 2010.
                Trusted by 500+ clients across 25+ countries.
              </p>
              <a
                href="https://wa.me/919714092106?text=Hello! I'm interested in your premium export quality garments."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-about"
              >
                <MessageCircle size={20} /> CHAT ON WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Work With JALA GARMENT */}
      <section className="why-jala-section">
        <div className="container">
          <div className="why-jala-header">
            <h2>Why Work With JALA GARMENT?</h2>
          </div>

          <div className="why-jala-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="why-jala-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Ready To Source CTA */}
      <section className="source-section">
        <div className="source-bg">
          <div className="source-card">
            <h2>Ready to Source from India?</h2>

            <p>
              Partner with JALA GARMENT for reliable, high-quality, and
              cost-effective garment export solutions.
            </p>

            <div className="source-buttons">
              <Link to="/contact" className="source-btn-white">
                Contact Us Today
              </Link>

              <a
                href="https://wa.me/9197140 92106"
                target="_blank"
                rel="noopener noreferrer"
                className="source-btn-green"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
