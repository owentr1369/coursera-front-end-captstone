import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapLocationDot,
  faChevronRight,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/app.css";

const menuLinks = [
  { icon: faUser, label: "My Account" },
  { icon: faEnvelope, label: "Email Preferences" },
  { icon: faMapLocationDot, label: "Saved Addresses" },
  { icon: faPhone, label: "Phone: 646-821-8442" },
  { icon: faMessage, label: "Send Us a Message" },
];

const ProfilePage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setShowForm(false);
  };

  return (
    <>
      {/* Profile Header */}
      <section className="profile-header" aria-label="User profile">
        <div className="profile-avatar" aria-hidden="true">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1 className="profile-name">Guest User</h1>
        <p className="profile-subtitle">Little Lemon Member</p>
      </section>

      {/* Account Menu */}
      <nav aria-label="Account options">
        <ul className="profile-menu-list">
          {menuLinks.map(({ icon, label }) => (
            <li key={label}>
              <button
                className="profile-menu-item"
                onClick={() =>
                  label === "Send Us a Message" && setShowForm(!showForm)
                }
                aria-expanded={
                  label === "Send Us a Message" ? showForm : undefined
                }
              >
                <span className="item-left">
                  <span className="item-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  {label}
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="chevron"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Form */}
      {showForm && (
        <section className="contact-form-section" aria-label="Send a message">
          <h2>Send Us a Message</h2>
          <p>We'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="123-456-7890"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default ProfilePage;
