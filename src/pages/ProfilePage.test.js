import { render, screen, fireEvent } from '@testing-library/react';
import ProfilePage from './ProfilePage';

describe('ProfilePage — rendering', () => {
  test('renders the Guest User name', () => {
    render(<ProfilePage />);
    expect(screen.getByText('Guest User')).toBeInTheDocument();
  });

  test('renders the Little Lemon Member subtitle', () => {
    render(<ProfilePage />);
    expect(screen.getByText('Little Lemon Member')).toBeInTheDocument();
  });

  test('renders all account menu items', () => {
    render(<ProfilePage />);
    expect(screen.getByRole('button', { name: /my account/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /email preferences/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /saved addresses/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send us a message/i })).toBeInTheDocument();
  });
});

describe('ProfilePage — contact form', () => {
  test('contact form is hidden initially', () => {
    render(<ProfilePage />);
    expect(screen.queryByRole('heading', { name: /send us a message/i })).not.toBeInTheDocument();
  });

  test('clicking Send Us a Message reveals the contact form', () => {
    render(<ProfilePage />);
    fireEvent.click(screen.getByRole('button', { name: /send us a message/i }));
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument();
  });

  test('clicking Send Us a Message again hides the contact form', () => {
    render(<ProfilePage />);
    const btn = screen.getByRole('button', { name: /send us a message/i });
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(screen.queryByRole('heading', { name: /send us a message/i })).not.toBeInTheDocument();
  });

  test('submitting the contact form fires an alert and hides the form', () => {
    window.alert = jest.fn();
    render(<ProfilePage />);

    fireEvent.click(screen.getByRole('button', { name: /send us a message/i }));

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(window.alert).toHaveBeenCalledWith(expect.stringMatching(/submitted/i));
    expect(screen.queryByRole('heading', { name: /send us a message/i })).not.toBeInTheDocument();
  });
});
