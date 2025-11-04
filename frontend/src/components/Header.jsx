// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="logo-link">
          <img src="/logo.jpeg" alt="CineMatchAI Logo" className="logo-img" />
          <span className="logo-text">CineMatchAI</span>
        </Link>
      </motion.div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
