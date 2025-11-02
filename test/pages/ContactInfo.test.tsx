import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactInfo from '../../src/pages/ContactInfo';

describe('ContactInfo', () => {
  it('renders the Contact Info heading', () => {
    render(<ContactInfo />);
    expect(screen.getByText('Contact Info')).toBeTruthy();
  });

  it('displays contact info content', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/I am a passionate professional with expertise in modern web development/i)).toBeTruthy();
  });

  it('mentions cutting-edge technologies', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/cutting-edge technologies and frameworks/i)).toBeTruthy();
  });

  it('mentions continuous learning', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/continuous learning and staying up-to-date/i)).toBeTruthy();
  });
});
