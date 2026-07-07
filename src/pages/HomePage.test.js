import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

const renderHomePage = () =>
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

describe('HomePage', () => {
  test('renders the hero welcome heading', () => {
    renderHomePage();
    expect(screen.getByText(/welcome to little lemon/i)).toBeInTheDocument();
  });

  test('renders the "Fresh Mediterranean Cuisine" subtitle', () => {
    renderHomePage();
    expect(screen.getByText(/fresh mediterranean cuisine/i)).toBeInTheDocument();
  });

  test("renders the This Week's Specials section heading", () => {
    renderHomePage();
    expect(screen.getByText(/this week's specials/i)).toBeInTheDocument();
  });

  test('renders the Reserve a Table link', () => {
    renderHomePage();
    expect(screen.getByRole('link', { name: /reserve a table/i })).toBeInTheDocument();
  });

  test('Reserve a Table link points to /reservations', () => {
    renderHomePage();
    expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
      'href',
      '/reservations'
    );
  });

  test('renders all 4 specials cards', () => {
    renderHomePage();
    expect(screen.getByText(/mediterranean mezze platter/i)).toBeInTheDocument();
    expect(screen.getByText(/caprese salad/i)).toBeInTheDocument();
    expect(screen.getByText(/mediterranean style pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/shrimp & avocado salad/i)).toBeInTheDocument();
  });

  test('renders the View all link to the menu', () => {
    renderHomePage();
    expect(screen.getByRole('link', { name: /view all/i })).toHaveAttribute('href', '/menu');
  });
});
