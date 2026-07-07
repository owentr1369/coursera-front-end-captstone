import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

jest.mock('../api');

describe('BookingPage', () => {
  test('renders the BOOK A TABLE banner text', () => {
    render(<BookingPage />);
    expect(screen.getByText(/book a table/i)).toBeInTheDocument();
  });

  test('renders the Reserve a Table heading', () => {
    render(<BookingPage />);
    expect(
      screen.getByRole('heading', { name: /reserve a table/i })
    ).toBeInTheDocument();
  });

  test('renders the introductory paragraph', () => {
    render(<BookingPage />);
    expect(screen.getByText(/fill in the form below/i)).toBeInTheDocument();
  });

  test('renders the BookingForm with all required fields', () => {
    render(<BookingPage />);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('renders the Make Your reservation submit button', () => {
    render(<BookingPage />);
    expect(
      screen.getByRole('button', { name: /make your reservation/i })
    ).toBeInTheDocument();
  });
});
