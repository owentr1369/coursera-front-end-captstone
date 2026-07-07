import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe('Navbar', () => {
  test('renders the header landmark', () => {
    renderNavbar();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders the logo image', () => {
    renderNavbar();
    expect(screen.getByAltText(/little lemon/i)).toBeInTheDocument();
  });

  test('renders the cart button', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();
  });

  test('renders all desktop navigation links', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^menu$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^reservations$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^profile$/i })).toBeInTheDocument();
  });

  test('Home link points to /', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/');
  });

  test('Menu link points to /menu', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /^menu$/i })).toHaveAttribute('href', '/menu');
  });
});
