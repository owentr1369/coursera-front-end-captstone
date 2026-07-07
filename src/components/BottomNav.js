import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.css';

const navItems = [
  { to: '/', icon: faHouse, label: 'Home' },
  { to: '/menu', icon: faBook, label: 'Menu' },
  { to: '/reservations', icon: faCalendarDays, label: 'Reservations' },
  { to: '/profile', icon: faUser, label: 'Profile' },
];

const BottomNav = () => (
  <nav className="bottom-nav">
    {navItems.map(({ to, icon, label }) => (
      <NavLink
        key={to}
        to={to}
        end={to === '/'}
        className={({ isActive }) => `bottom-nav-item${isActive ? ' active' : ''}`}
      >
        <FontAwesomeIcon icon={icon} className="nav-icon" />
        <span>{label}</span>
      </NavLink>
    ))}
  </nav>
);

export default BottomNav;
