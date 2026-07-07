import React, { useReducer, useState } from "react";
import { initializeTimes, updateTimes } from "../utils/bookingUtils";
import { validate } from "../utils/validation";

const today = new Date().toISOString().split("T")[0];

const BookingForm = ({ onSubmit }) => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
  });

  const errors = validate(date, time, guests);
  const isFormValid = Object.values(errors).every((e) => e === null);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setTime("");
    dispatch({ type: "UPDATE_DATE", payload: { date: newDate } });
  };

  const handleBlur = (field) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true });
    if (!isFormValid) return;
    onSubmit && onSubmit({ date, time, guests, occasion });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "grid", maxWidth: "480px", gap: "20px" }}
    >
      {/* ── Date ── */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        onBlur={() => handleBlur("date")}
        required
        aria-required="true"
        aria-invalid={touched.date && !!errors.date}
        aria-describedby={touched.date && errors.date ? "date-error" : undefined}
      />
      {touched.date && errors.date && (
        <span id="date-error" role="alert" className="form-error">
          {errors.date}
        </span>
      )}

      {/* ── Time ── */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onBlur={() => handleBlur("time")}
        required
        aria-required="true"
        aria-invalid={touched.time && !!errors.time}
        aria-describedby={touched.time && errors.time ? "time-error" : undefined}
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {touched.time && errors.time && (
        <span id="time-error" role="alert" className="form-error">
          {errors.time}
        </span>
      )}

      {/* ── Guests ── */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        onBlur={() => handleBlur("guests")}
        required
        aria-required="true"
        aria-invalid={touched.guests && !!errors.guests}
        aria-describedby={touched.guests && errors.guests ? "guests-error" : undefined}
      />
      {touched.guests && errors.guests && (
        <span id="guests-error" role="alert" className="form-error">
          {errors.guests}
        </span>
      )}

      {/* ── Occasion ── */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* ── Submit ── */}
      <button
        type="submit"
        className="cta-primary"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
      >
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
