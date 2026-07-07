import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const hours = [
  { day: 'Monday – Friday', time: '10AM – 9PM' },
  { day: 'Saturday', time: '12PM – 11PM' },
  { day: 'Sunday', time: '12PM – 8PM' },
];

const ReservationsPage = () => (
  <div>
    <div className="res-banner">
      <img src="/little-lemon-images/image16.jpeg" alt="Reservations" />
      <div className="res-banner-title">RESERVATIONS</div>
    </div>

    <div className="res-body">
      <a href="tel:6468218442" className="res-phone-cta">
        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
        Call 646-821-8442
      </a>

      <div className="res-info-card">
        <h3>Book a Reservation</h3>
        <p>Please make a reservation by calling during our hours of operations.</p>
      </div>

      <div className="res-info-card">
        <h3>Hours of Operation</h3>
        <ul className="hours-list" style={{ marginTop: 12 }}>
          {hours.map(({ day, time }) => (
            <li key={day}>
              <span className="day">{day}</span>
              <span className="time">{time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="res-info-card">
        <h3>Location</h3>
        <p>5020 Converse Avenue<br />Bookis, New York 31983</p>
      </div>
    </div>
  </div>
);

export default ReservationsPage;
