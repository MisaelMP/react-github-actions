import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(
		/React dumb app for testing github action/i
	);
  expect(titleElement).toBeInTheDocument();
});
