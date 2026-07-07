import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChair,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/app.css";

const specials = [
  {
    name: "Mediterranean Mezze Platter",
    desc: "Tomatoes, Hummous, Olives, Feta Cheese, Grilled Vegetables, Rosemary garnish.",
    price: "$25.00",
    img: "/little-lemon-images/image8.jpeg",
  },
  {
    name: "Caprese Salad",
    desc: "Tomatoes, Mozzarella, Basil, Balsamic glaze, Olive oil.",
    price: "$14.63",
    img: "/little-lemon-images/image5.jpeg",
  },
  {
    name: "Mediterranean Style Pizza",
    desc: "Tomatoes, Pepperoni, Olives, Feta cheese, Spinach or basil.",
    price: "$12.25",
    img: "/little-lemon-images/image3.jpeg",
  },
  {
    name: "Shrimp & Avocado Salad",
    desc: "Cooked shrimp, Avocado, Greens, Red onion, Sliced almonds.",
    price: "$25.00",
    img: "/little-lemon-images/image6.jpeg",
  },
];

const HomePage = () => (
  <>
    {/* Hero */}
    <section className="hero" aria-label="Welcome banner">
      <img
        src="/little-lemon-images/image1.jpeg"
        alt="Mediterranean food spread at Little Lemon"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Little Lemon!</h1>
        <p className="hero-subtitle">Fresh Mediterranean Cuisine</p>
        <Link to="/reservations" className="reserve-btn">
          <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" />
          Reserve a Table
        </Link>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="stats-bar" aria-label="Restaurant availability">
      <div className="stat-item">
        <div className="stat-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faChair} />
        </div>
        <div className="stat-text">
          <span className="stat-label">Tables available</span>
          <strong className="stat-value">8 open tonight</strong>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon" aria-hidden="true">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <div className="stat-text">
          <span className="stat-label">Avg. booking time</span>
          <strong className="stat-value">Under 1 min</strong>
        </div>
      </div>
    </section>

    {/* This Week's Specials */}
    <section aria-labelledby="specials-heading">
      <div className="section-header">
        <h2 id="specials-heading" className="section-title">
          This Week's Specials
        </h2>
        <Link to="/menu" className="section-link">
          View all
        </Link>
      </div>

      <ul className="specials-list">
        {specials.map((item) => (
          <li key={item.name}>
            <article className="special-card">
              <img
                src={item.img}
                alt={item.name}
                className="special-card-img"
              />
              <div className="special-card-body">
                <h3 className="special-card-name">{item.name}</h3>
                <p className="special-card-desc">{item.desc}</p>
                <p className="special-card-price">{item.price}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default HomePage;
