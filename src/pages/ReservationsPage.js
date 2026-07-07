import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faCalendarDays,
  faClock,
  faUserGroup,
  faEnvelope,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/reservations.css";

const TIME_SLOTS = [
  { time: "12:00 PM", available: true },
  { time: "12:30 PM", available: true },
  { time: "1:00 PM", available: true },
  { time: "5:00 PM", available: true },
  { time: "1:30 PM", available: true },
  { time: "6:00 PM", available: true },
  { time: "8:00 PM", available: false },
  { time: "7:00 PM", available: true },
  { time: "7:30 PM", available: true },
  { time: "8:30 PM", available: false },
];

const OCCASIONS = [
  "",
  "Birthday",
  "Anniversary",
  "Date Night",
  "Business Meal",
  "Other",
];

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatDateShort = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [request, setRequest] = useState("");

  const canContinue = date && time;

  const handleConfirm = (e) => {
    e.preventDefault();
    setStep("confirmed");
  };

  /* ── Confirmed screen ── */
  if (step === "confirmed") {
    return (
      <div className="res-confirmed">
        <div className="res-confirmed-inner">
          <div className="confirmed-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <h1 className="confirmed-title">Booking Confirmed!</h1>
          <p className="confirmed-sub">
            Thank you for choosing
            <br />
            Little Lemon.
          </p>

          <div className="confirmed-summary">
            <p className="confirmed-summary-label">Reservation Summary</p>
            <div className="confirmed-row">
              <span className="confirmed-row-left">
                <FontAwesomeIcon icon={faCalendarDays} /> Date
              </span>
              <span className="confirmed-row-right">{formatDate(date)}</span>
            </div>
            <div className="confirmed-row">
              <span className="confirmed-row-left">
                <FontAwesomeIcon icon={faClock} /> Time
              </span>
              <span className="confirmed-row-right">{time}</span>
            </div>
            <div className="confirmed-row">
              <span className="confirmed-row-left">
                <FontAwesomeIcon icon={faUserGroup} /> Guests
              </span>
              <span className="confirmed-row-right">
                {guests} {guests === 1 ? "person" : "people"}
              </span>
            </div>
          </div>

          <div className="confirmed-notice">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>
              Confirmation sent to your email &amp; phone. Check your inbox or
              messages.
            </span>
          </div>

          <button
            className="res-btn-outline"
            aria-label="Add reservation to calendar"
          >
            <FontAwesomeIcon icon={faCalendarPlus} aria-hidden="true" /> Add to
            Calendar
          </button>
          <Link to="/" className="res-btn-solid">
            Back To Home
          </Link>
        </div>
      </div>
    );
  }

  /* ── Step 1 & 2 shared layout ── */
  return (
    <div className="res-page">
      {/* Header */}
      <div className="res-header">
        <button
          className="res-back"
          onClick={() => (step === 2 ? setStep(1) : window.history.back())}
          aria-label="Back"
        >
          <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
        </button>
        <span className="res-header-title">Reserve a Table</span>
        <span style={{ width: 36 }} />
      </div>

      {/* Progress */}
      <div className="res-progress">
        <div className={`res-step ${step >= 1 ? "active" : ""}`}>
          <div className="res-step-circle">
            {step > 1 ? <FontAwesomeIcon icon={faCheck} size="xs" /> : "1"}
          </div>
          <span>Date &amp; Time</span>
        </div>
        <div className={`res-progress-line ${step >= 2 ? "active" : ""}`} />
        <div className={`res-step ${step >= 2 ? "active" : ""}`}>
          <div className="res-step-circle">2</div>
          <span>Details</span>
        </div>
      </div>

      {/* ── Step 1: Date + Time ── */}
      {step === 1 && (
        <div className="res-body">
          <div className="res-field-card">
            <label className="res-label" htmlFor="res-date-step1">
              <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" /> Date
            </label>
            <input
              type="date"
              id="res-date-step1"
              className="res-date-input"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                setDate(e.target.value);
                setTime("");
              }}
            />
          </div>

          {date && (
            <div className="res-field-card">
              <p className="res-slots-title">
                <FontAwesomeIcon icon={faClock} /> Available Time Slots
              </p>
              <p className="res-slots-sub">
                Next time availability: {formatDateShort(date)}
              </p>
              <div className="res-slots-grid">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    className={`res-slot${
                      !slot.available ? " unavailable" : ""
                    }${time === slot.time ? " selected" : ""}`}
                    onClick={() => slot.available && setTime(slot.time)}
                    aria-label={
                      slot.available
                        ? `Select ${slot.time}`
                        : `${slot.time} unavailable`
                    }
                    aria-pressed={time === slot.time}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            className={`res-continue${canContinue ? " enabled" : ""}`}
            disabled={!canContinue}
            onClick={() => setStep(2)}
            aria-label="Continue to reservation details"
          >
            Continue <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* ── Step 2: Details ── */}
      {step === 2 && (
        <form className="res-body" onSubmit={handleConfirm}>
          {/* Selected date/time summary */}
          <div className="res-field-card res-summary-row">
            <span className="res-summary-text">
              {formatDateShort(date)}, {time}
            </span>
            <button
              type="button"
              className="res-change-btn"
              onClick={() => setStep(1)}
            >
              Change
            </button>
          </div>

          {/* Guests stepper */}
          <div className="res-field-card">
            <p className="res-label">Number of Guests</p>
            <div className="res-stepper">
              <button
                type="button"
                className="res-stepper-btn"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                aria-label="Decrease number of guests"
              >
                −
              </button>
              <span
                className="res-stepper-value"
                aria-live="polite"
                aria-atomic="true"
              >
                {guests}
              </span>
              <button
                type="button"
                className="res-stepper-btn"
                onClick={() => setGuests((g) => Math.min(7, g + 1))}
                aria-label="Increase number of guests"
              >
                +
              </button>
            </div>
            <p className="res-stepper-note">For groups of 8+, please call us</p>
          </div>

          {/* Occasion */}
          <div className="res-field-card">
            <label className="res-label" htmlFor="occasion">
              Occasion <span className="res-optional">(Optional)</span>
            </label>
            <select
              id="occasion"
              className="res-select"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              {OCCASIONS.map((o) => (
                <option key={o} value={o}>
                  {o || "Select occasion…"}
                </option>
              ))}
            </select>
          </div>

          {/* Special Request */}
          <div className="res-field-card">
            <label className="res-label" htmlFor="request">
              Special Request <span className="res-optional">(Optional)</span>
            </label>
            <textarea
              id="request"
              className="res-textarea"
              rows={3}
              placeholder="e.g. near window, high chair, allergies..."
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            />
          </div>

          <button type="submit" className="res-reserve-btn">
            Reserve Now <FontAwesomeIcon icon={faCheck} />
          </button>
          <p className="res-confirm-note">
            You'll receive instant email &amp; SMS confirmation
          </p>
        </form>
      )}
    </div>
  );
}
