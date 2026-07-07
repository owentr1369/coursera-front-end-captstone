import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/profile', label: 'Profile' },
];

const Navbar = () => (
  <header className="top-nav">
    {/* Mobile: hamburger */}
    <button className="top-nav-icon" aria-label="Menu">
      <FontAwesomeIcon icon={faBars} />
    </button>

    {/* Brand — shows logo image on desktop, text-only on mobile */}
    <NavLink to="/" className="top-nav-title" style={{ textDecoration: 'none' }}>
      <img
        src="/little-lemon-images/logo.png"
        alt="Little Lemon"
        className="top-nav-logo"
      />
      Little Lemon
    </NavLink>

    {/* Mobile: cart */}
    <button className="cart-btn" aria-label="Cart">
      <FontAwesomeIcon icon={faShoppingBag} />
    </button>

    {/* Desktop: nav links */}
    <ul className="desktop-nav-links">
      {navLinks.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </header>
);

export default Navbar;
