import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from '../../src/pages/Resume';

vi.mock('@react-pdf/renderer', () => ({
  PDFDownloadLink: ({ children }) => {
    // PDFDownloadLink uses a render prop. We call it with loading: false
    // to render the button.
    if (typeof children === 'function') {
      return children({ loading: false });
    }
    return children;
  },
  StyleSheet: {
    create: (styles) => styles,
  },
}));

describe('Resume', () => {
  it('renders the Resume heading and download button', () => {
    render(<Resume />);
    expect(screen.getByText('Resume')).toBeTruthy();
    expect(screen.getByText('Download Resume')).toBeTruthy();
  });
});
