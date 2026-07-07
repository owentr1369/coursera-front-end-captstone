import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faChair,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const specials = [
  {
    name: 'Mediterranean Mezze Platter',
    price: '$21.00',
    img: '/little-lemon-images/image8.jpeg',
  },
  {
    name: 'Grilled Salmon Kebab',
    price: '$28.00',
    img: '/little-lemon-images/image12.jpeg',
  },
  {
    name: 'Greek Lasagna',
    price: '$29.00',
    img: '/little-lemon-images/image13.jpeg',
  },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="hero">
      <img
        src="/little-lemon-images/image1.jpeg"
        alt="Little Lemon"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to<br />Little Lemon</h1>
        <p className="hero-subtitle">From Mediterranean cuisine,<br />direct to you, UK</p>
        <Link to="/reservations" className="reserve-btn">
          <FontAwesomeIcon icon={faCalendarDays} />
          Reserve a Table
        </Link>
      </div>
    </section>

    {/* Stats Bar */}
    <div className="stats-bar">
      <div className="stat-item">
        <div className="stat-icon">
          <FontAwesomeIcon icon={faChair} />
        </div>
        <div className="stat-text">
          <span className="stat-label">Tables available</span>
          <span className="stat-value">8 open tonight</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <div className="stat-text">
          <span className="stat-label">Avg. booking time</span>
          <span className="stat-value">Under 1 min</span>
        </div>
      </div>
    </div>

    {/* This Week's Specials */}
    <div className="section-header">
      <span className="section-title">This Week's Specials</span>
      <Link to="/menu" className="section-link">View all</Link>
    </div>

    <div className="specials-list">
      {specials.map((item) => (
        <div key={item.name} className="special-card">
          <img src={item.img} alt={item.name} className="special-card-img" />
          <div className="special-card-body">
            <span className="special-card-name">{item.name}</span>
            <span className="special-card-price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
