import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faChair, faBolt } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const specials = [
  {
    name: 'Mediterranean Mezze Platter',
    desc: 'Tomatoes, Hummous, Olives, Feta Cheese, Grilled Vegetables, Rosemary garnish.',
    price: '$25.00',
    img: '/little-lemon-images/image8.jpeg',
  },
  {
    name: 'Caprese Salad',
    desc: 'Tomatoes, Mozzarella, Basil, Balsamic glaze, Olive oil.',
    price: '$14.63',
    img: '/little-lemon-images/image5.jpeg',
  },
  {
    name: 'Mediterranean Style Pizza',
    desc: 'Tomatoes, Pepperoni, Olives, Feta cheese, Spinach or basil.',
    price: '$12.25',
    img: '/little-lemon-images/image3.jpeg',
  },
  {
    name: 'Shrimp & Avocado Salad',
    desc: 'Cooked shrimp, Avocado, Greens, Red onion, Sliced almonds.',
    price: '$25.00',
    img: '/little-lemon-images/image6.jpeg',
  },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="hero">
      <img src="/little-lemon-images/image1.jpeg" alt="Little Lemon" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Little Lemon!</h1>
        <p className="hero-subtitle">Fresh Mediterranean Cuisine</p>
        <Link to="/reservations" className="reserve-btn">
          <FontAwesomeIcon icon={faCalendarDays} />
          Reserve a Table
        </Link>
      </div>
    </section>

    {/* Stats Bar */}
    <div className="stats-bar">
      <div className="stat-item">
        <div className="stat-icon"><FontAwesomeIcon icon={faChair} /></div>
        <div className="stat-text">
          <span className="stat-label">Tables available</span>
          <span className="stat-value">8 open tonight</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon"><FontAwesomeIcon icon={faBolt} /></div>
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
            <span className="special-card-desc">{item.desc}</span>
            <span className="special-card-price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
