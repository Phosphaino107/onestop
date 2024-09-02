// src/components/Nav.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';  

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">OneStop</Link>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={isMobileMenuOpen ? 'navbar-links active' : 'navbar-links'}>
        <li>
          <NavLink exact to="/" className="nav-item" activeClassName="active" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="nav-item" activeClassName="active" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-store"></i> Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item" activeClassName="active" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-info-circle"></i> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item" activeClassName="active" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-envelope"></i> Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item" activeClassName="active" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-shopping-cart"></i> Cart
          </NavLink>
        </li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search products..." className="search-input" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
