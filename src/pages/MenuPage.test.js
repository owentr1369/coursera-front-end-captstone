import { render, screen, fireEvent } from '@testing-library/react';
import MenuPage from './MenuPage';

describe('MenuPage — rendering', () => {
  test('renders the MENU banner title', () => {
    render(<MenuPage />);
    expect(screen.getByText('MENU')).toBeInTheDocument();
  });

  test('renders all category filter buttons', () => {
    render(<MenuPage />);
    ['All', 'Appetizers', 'Kebabs', 'Vegetarian', 'Entrees'].forEach((cat) => {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument();
    });
  });

  test('renders menu items on initial load (All category)', () => {
    render(<MenuPage />);
    expect(screen.getByRole('heading', { name: /romaine salad/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /grilled lamb/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /roasted cauliflower/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /seafood grill/i })).toBeInTheDocument();
  });
});

describe('MenuPage — category filtering', () => {
  test('Appetizers filter shows only appetizer items', () => {
    render(<MenuPage />);
    fireEvent.click(screen.getByRole('button', { name: 'Appetizers' }));

    expect(screen.getByRole('heading', { name: /romaine salad/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /grilled lamb/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /roasted cauliflower/i })).not.toBeInTheDocument();
  });

  test('Vegetarian filter shows only vegetarian items', () => {
    render(<MenuPage />);
    fireEvent.click(screen.getByRole('button', { name: 'Vegetarian' }));

    expect(screen.getByRole('heading', { name: /roasted cauliflower/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /burrata/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /romaine salad/i })).not.toBeInTheDocument();
  });

  test('All filter restores the full menu', () => {
    render(<MenuPage />);
    fireEvent.click(screen.getByRole('button', { name: 'Kebabs' }));
    fireEvent.click(screen.getByRole('button', { name: 'All' }));

    expect(screen.getByRole('heading', { name: /romaine salad/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /grilled lamb/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /seafood grill/i })).toBeInTheDocument();
  });

  test('active category button has aria-pressed=true', () => {
    render(<MenuPage />);
    const appetizersBtn = screen.getByRole('button', { name: 'Appetizers' });
    fireEvent.click(appetizersBtn);
    expect(appetizersBtn).toHaveAttribute('aria-pressed', 'true');
  });
});
