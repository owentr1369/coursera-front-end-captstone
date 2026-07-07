import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

jest.mock('../api');

describe('BookingForm — rendering', () => {
  beforeEach(() => render(<BookingForm />));

  test('renders the date input', () => {
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test('renders the time select', () => {
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  });

  test('renders the number of guests input', () => {
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  });

  test('renders the occasion select', () => {
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('renders the submit button', () => {
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('time select is populated with available time options', () => {
    const select = screen.getByLabelText(/choose time/i);
    expect(select.querySelectorAll('option').length).toBeGreaterThan(0);
  });

  test('occasion select includes Birthday and Anniversary', () => {
    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();
  });
});

describe('BookingForm — behaviour', () => {
  test('calls onSubmit with correct field values when form is submitted', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-10' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Anniversary' },
    });

    fireEvent.submit(container.querySelector('form'));

    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        date: '2026-07-10',
        guests: 3,
        occasion: 'Anniversary',
      })
    );
  });

  test('updating the date resets the time field (submitted time is empty)', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-10' },
    });

    // Submit immediately after changing date — time should be empty string
    fireEvent.submit(container.querySelector('form'));

    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ date: '2026-07-10', time: '' })
    );
  });
});
