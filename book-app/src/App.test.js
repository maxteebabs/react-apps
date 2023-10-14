import { render, screen } from '@testing-library/react';
import App from './App';

test('should check if book was rendered', () => {
  render(<App />);
  const bookElement = screen.getByTestId('book-wrapper');
  expect(bookElement).toBeInTheDocument();
});