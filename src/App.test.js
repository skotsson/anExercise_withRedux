import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const shop = screen.getByText(/Shop/i);
  expect(shop).toBeInTheDocument();
  const cart = screen.getByText(/Cart/i);
  expect(cart).toBeInTheDocument();
});
