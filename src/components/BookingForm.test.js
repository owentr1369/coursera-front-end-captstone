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
    // placeholder + mocked times
    expect(select.querySelectorAll('option').length).toBeGreaterThan(1);
  });

  test('occasion select includes Birthday and Anniversary', () => {
    expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();
  });
});

describe('BookingForm — HTML5 validation attributes', () => {
  test('date input has required attribute', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
  });

  test('time select has required attribute', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
  });

  test('guests input has required attribute', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/number of guests/i)).toBeRequired();
  });

  test('guests input has min="1" and max="10"', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText(/number of guests/i);
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '10');
  });

  test('date input has a min attribute set to today or later', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText(/choose date/i);
    expect(input).toHaveAttribute('min');
    expect(input.getAttribute('min')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('BookingForm — React validation (submit button state)', () => {
  test('submit button is disabled when date and time are empty', () => {
    render(<BookingForm />);
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

  test('submit button is disabled when only date is filled', () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-10' },
    });
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

  test('submit button is enabled when date, time and guests are all valid', () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-10' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '2' },
    });
    expect(screen.getByRole('button', { name: /make your reservation/i })).not.toBeDisabled();
  });
});

describe('BookingForm — React validation (error messages)', () => {
  test('no error messages are shown before fields are touched', () => {
    render(<BookingForm />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('date error appears after date field is blurred empty', () => {
    render(<BookingForm />);
    fireEvent.blur(screen.getByLabelText(/choose date/i));
    expect(screen.getByRole('alert')).toHaveTextContent(/please choose a date/i);
  });

  test('time error appears after time field is blurred without selection', () => {
    render(<BookingForm />);
    fireEvent.blur(screen.getByLabelText(/choose time/i));
    expect(screen.getByRole('alert')).toHaveTextContent(/please select an available time/i);
  });

  test('all errors appear when submitting an empty form', () => {
    const { container } = render(<BookingForm />);
    fireEvent.submit(container.querySelector('form'));
    const alerts = screen.getAllByRole('alert');
    expect(alerts.length).toBeGreaterThanOrEqual(2);
  });

  test('guests error appears when value is out of range', () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '15' },
    });
    fireEvent.blur(screen.getByLabelText(/number of guests/i));
    expect(screen.getByRole('alert')).toHaveTextContent(/between 1 and 10/i);
  });

  test('aria-invalid is set on date input after blur with empty value', () => {
    render(<BookingForm />);
    fireEvent.blur(screen.getByLabelText(/choose date/i));
    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('BookingForm — behaviour', () => {
  test('calls onSubmit with all form data when the form is valid and submitted', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-10' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Anniversary' },
    });

    fireEvent.submit(container.querySelector('form'));

    expect(handleSubmit).toHaveBeenCalledWith({
      date: '2026-07-10',
      time: '17:00',
      guests: 3,
      occasion: 'Anniversary',
    });
  });

  test('does NOT call onSubmit when the form is invalid', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<BookingForm onSubmit={handleSubmit} />);

    fireEvent.submit(container.querySelector('form'));

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('changing the date resets the selected time and disables the submit button', () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-10' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });

    // Change date — time resets, form becomes invalid again
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2026-07-11' },
    });

    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });
});
