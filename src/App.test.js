import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders testing in h1 ', () => {
  render(<App />);
  const titleh1Element = screen.getByText(/Testing react/i);
  expect(titleh1Element).toBeInTheDocument();
});
