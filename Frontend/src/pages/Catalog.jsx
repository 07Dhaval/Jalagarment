import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import WhatsAppButton from "../components/WhatsAppButton";
import "./Catalog.css";

const Catalog = () => {
  const { products, categories, loading } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const allCollection = {
    _id: "All",
    name: "All Collection",
  };

  const displayCategories = [allCollection, ...categories];

  const filteredProducts = products.filter((product) => {
    return (
      selectedCategory === "All" ||
      product.category?._id === selectedCategory ||
      product.category?.name === selectedCategory
    );
  });

  return (
    <motion.div
      className="catalog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}

      <section className="catalog-hero">
        <div className="container">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Our Denim Products
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Premium quality denim jeans tailored for global markets,
            featuring our specialized Japanese export collection.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}

      <section className="catalog-filter-section">
        <div className="container">
          <div className="category-filters-minimal">
            {displayCategories.map((cat) => (
              <button
                key={cat._id}
                className={`filter-btn-minimal ${
                  selectedCategory === cat._id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat._id)}
              >
                {cat.name === "All Collection"
                  ? "ALL"
                  : cat.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="catalog-products">
        <div className="container">
          {loading ? (
            <div className="loading-minimal">
              Loading collection...
            </div>
          ) : (
            <div className="product-grid-minimal">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    layout
                    className="product-card-minimal"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                  >
                    <Link to={`/product/${product._id}`}>
                      <div className="product-img-minimal">
                        <img
                          src={product.images?.[0]?.url}
                          alt={product.name}
                        />
                      </div>

                      <div className="product-info-minimal">
                        <span className="product-category-tag">
                          {product.category?.name || "PRODUCT"}
                        </span>

                        <h3 className="product-title-minimal">
                          {product.name}
                        </h3>
                      </div>
                    </Link>

                    <div className="product-action-minimal">
                      <WhatsAppButton
                        product={product}
                        variant="minimal"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="no-results-minimal">
              <p>No products found.</p>

              <button
                className="btn-reset"
                onClick={() =>
                  setSelectedCategory("All")
                }
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PREMIUM BANNER */}

      <section className="premium-banner-sectionn">
        <div className="container">
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
                Serving international markets with quality garments since
                2010. Trusted by 500+ clients across 25+ countries.
              </p>

              <Link
                to="/contact"
                className="btn-view-collection"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Catalog;