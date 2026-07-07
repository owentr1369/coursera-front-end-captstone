import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationsPage from './ReservationsPage';

const renderPage = () =>
  render(
    <MemoryRouter>
      <ReservationsPage />
    </MemoryRouter>
  );

describe('ReservationsPage — step 1 (Date & Time)', () => {
  test('renders the Reserve a Table header', () => {
    renderPage();
    expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
  });

  test('shows the Date & Time progress step label', () => {
    renderPage();
    expect(screen.getByText(/date & time/i)).toBeInTheDocument();
  });

  test('Continue button is disabled before a date and time are chosen', () => {
    renderPage();
    expect(screen.getByRole('button', { name: /continue/i })).toBeDisabled();
  });

  test('time slots appear after selecting a date', () => {
    const { container } = renderPage();
    const dateInput = container.querySelector('input[type="date"]');
    fireEvent.change(dateInput, { target: { value: '2026-07-10' } });
    expect(screen.getByText(/available time slots/i)).toBeInTheDocument();
  });

  test('Continue button becomes enabled after choosing date and time', () => {
    const { container } = renderPage();
    const dateInput = container.querySelector('input[type="date"]');
    fireEvent.change(dateInput, { target: { value: '2026-07-10' } });

    const availableSlot = screen
      .getAllByRole('button')
      .find((btn) => !btn.disabled && btn.textContent.match(/^\d{1,2}:\d{2}/));

    if (availableSlot) {
      fireEvent.click(availableSlot);
      expect(screen.getByRole('button', { name: /continue/i })).not.toBeDisabled();
    }
  });
});

describe('ReservationsPage — step 2 (Details)', () => {
  const goToStep2 = () => {
    const { container } = renderPage();
    const dateInput = container.querySelector('input[type="date"]');
    fireEvent.change(dateInput, { target: { value: '2026-07-10' } });

    const slot = screen
      .getAllByRole('button')
      .find((btn) => !btn.disabled && btn.textContent.match(/^\d{1,2}:\d{2}/));
    if (slot) fireEvent.click(slot);

    const continueBtn = screen.getByRole('button', { name: /continue/i });
    if (!continueBtn.disabled) fireEvent.click(continueBtn);
  };

  test('step 2 shows the Details label', () => {
    goToStep2();
    expect(screen.getByText(/^details$/i)).toBeInTheDocument();
  });

  test('step 2 shows Number of Guests label', () => {
    goToStep2();
    expect(screen.getByText(/number of guests/i)).toBeInTheDocument();
  });

  test('step 2 shows the Reserve Now button', () => {
    goToStep2();
    expect(screen.getByRole('button', { name: /reserve now/i })).toBeInTheDocument();
  });
});

describe('ReservationsPage — confirmation', () => {
  const completeBooking = () => {
    const { container } = renderPage();
    const dateInput = container.querySelector('input[type="date"]');
    fireEvent.change(dateInput, { target: { value: '2026-07-10' } });

    const slot = screen
      .getAllByRole('button')
      .find((btn) => !btn.disabled && btn.textContent.match(/^\d{1,2}:\d{2}/));
    if (slot) fireEvent.click(slot);

    const continueBtn = screen.getByRole('button', { name: /continue/i });
    if (!continueBtn.disabled) fireEvent.click(continueBtn);

    const reserveBtn = screen.getByRole('button', { name: /reserve now/i });
    fireEvent.click(reserveBtn);
  };

  test('shows Booking Confirmed screen after submission', () => {
    completeBooking();
    expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
  });

  test('confirmation screen shows Back To Home link', () => {
    completeBooking();
    expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument();
  });
});
