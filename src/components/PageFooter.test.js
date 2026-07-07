import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  test('renders the footer landmark', () => {
    render(<PageFooter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders the Little Lemon logo', () => {
    render(<PageFooter />);
    expect(screen.getByAltText(/little lemon/i)).toBeInTheDocument();
  });

  test('renders the copyright notice', () => {
    render(<PageFooter />);
    expect(screen.getByText(/little lemon/i)).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
