import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Home', () => {
  it('renders the About Me section', () => {
    render(<Home />);
    expect(screen.getByText('About Me')).toBeTruthy();
  });

  it('renders the Work Experience section', () => {
    render(<Home />);
    expect(screen.getByText('Work Experience')).toBeTruthy();
  });

  it('displays about me content', () => {
    render(<Home />);
    expect(screen.getByText(/I am a passionate professional/i)).toBeTruthy();
  });

  it('displays work experience content', () => {
    render(<Home />);
    expect(screen.getByText(/Throughout my career/i)).toBeTruthy();
  });
});
