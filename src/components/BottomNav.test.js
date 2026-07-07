import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BottomNav from './BottomNav';

const renderBottomNav = () =>
  render(
    <MemoryRouter>
      <BottomNav />
    </MemoryRouter>
  );

describe('BottomNav', () => {
  test('renders exactly 4 navigation links', () => {
    renderBottomNav();
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });

  test('renders Home, Menu, Reservations and Profile links', () => {
    renderBottomNav();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reservations/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /profile/i })).toBeInTheDocument();
  });

  test('Reservations link points to /reservations', () => {
    renderBottomNav();
    expect(screen.getByRole('link', { name: /reservations/i })).toHaveAttribute(
      'href',
      '/reservations'
    );
  });
});
