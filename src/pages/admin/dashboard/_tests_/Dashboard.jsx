// Dashboard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dashboard from '../Dashboard';
import { BrowserRouter } from 'react-router-dom';

const renderComponent = () =>
  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );

describe('Dashboard (with Vitest)', () => {
  it('renders the Yearly Revenue title', () => {
    renderComponent();
    expect(screen.getByText(/Yearly Revenue/i)).toBeInTheDocument();
  });

  it('renders the See More link', () => {
    renderComponent();
    const seeMore = screen.getByText(/See More/i);
    expect(seeMore).toBeInTheDocument();
    expect(seeMore.closest('a')).toHaveAttribute('href', '/revenue');
  });

  it('renders the AreaChart SVG', () => {
    renderComponent();
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders calendar and responds to year click', () => {
    renderComponent();
    const year = screen.getByText(/2022|2023|2024/); // Adjust based on actual rendered years
    expect(year).toBeInTheDocument();
    fireEvent.click(year);
  });
});
