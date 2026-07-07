import React, { useState } from 'react';
import ImageBanner from '../components/ImageBanner';
import '../styles/contact.css';

const hours = [
  { days: 'Monday - Friday', time: '10AM - 9PM' },
  { days: 'Saturday', time: '12PM - 11PM' },
  { days: 'Sunday', time: '12PM - 8PM' },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ImageBanner
        src="/little-lemon-images/image17.jpeg"
        title="CONTACT US"
      />

      <section id="contact-section">
        <div id="contact-us-form">
          <h3>Send Us A Message</h3>
          <p>We'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Question/Comment</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
            <input type="submit" value="SUBMIT COMMENT" />
          </form>
        </div>

        <div id="contact-info">
          <div id="phone-number">
            <h3>Phone Number:</h3>
            <span>646-821-8442</span>
          </div>
          <div id="address">
            <h3>Address:</h3>
            <span>
              5020 Converse Avenue<br />
              Bookis, New York 31983
            </span>
          </div>
          <div id="hours">
            <h3>Hours of Operation:</h3>
            <ul>
              {hours.map(({ days, time }) => (
                <li key={days}>
                  <span>{days}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
