import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('btn has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')

})

test('initial condition', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})






















// test('renders learn react link', () => {
//   render(<App />);
//   //looks in DOM by any element displayed as the regex on getByRole
//   // role are based on role by W3 you can add role to div for example
//   const linkElement = screen.getByRole('link', { name: /learn react/i });
//   //assertion expression, test expression
//   expect(linkElement).toBeInTheDocument();
// });
