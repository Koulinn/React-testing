import { render, screen } from '@testing-library/react';
import App from './App';



test('btn has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

})

test('btn has correct initial text', () => {

})
test('btn turns blue when clicked', () => {

})




















// test('renders learn react link', () => {
//   render(<App />);
//   //looks in DOM by any element displayed as the regex on getByRole
//   // role are based on role by W3 you can add role to div for example
//   const linkElement = screen.getByRole('link', { name: /learn react/i });
//   //assertion expression, test expression
//   expect(linkElement).toBeInTheDocument();
// });
