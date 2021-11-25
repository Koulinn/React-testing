import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //looks in DOM by any element displayed as the regex on getByRole
  // role are based on role by W3 you can add role to div for example
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  //assertion expression, test expression
  expect(linkElement).toBeInTheDocument();
});
