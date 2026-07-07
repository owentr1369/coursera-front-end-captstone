import React from "react";
import BookingForm from "../components/BookingForm";
import "../styles/app.css";

const BookingPage = () => {
  const handleSubmit = (data) => {
    alert(
      `Reservation submitted!\n\nDate: ${data.date}\nTime: ${data.time}\nGuests: ${data.guests}\nOccasion: ${data.occasion}`
    );
  };

  return (
    <>
      <figure className="menu-banner">
        <img
          src="/little-lemon-images/reservations.png"
          alt="Little Lemon restaurant interior"
        />
        <figcaption className="menu-banner-title">BOOK A TABLE</figcaption>
      </figure>

      <section className="booking-section" aria-labelledby="booking-heading">
        <h2 id="booking-heading">Reserve a Table</h2>
        <p>Fill in the form below to book your table at Little Lemon.</p>
        <BookingForm onSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default BookingPage;
