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

// checkbox determine enable state of the btn 
// if checked btn is disabled
// if not checked btn is enabled
// test if after click change btn behavior

test('btn has opposite behavior of checkbox', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: /change/i })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  //event click
  fireEvent.click(checkbox)

  //after click checkbox
  expect(checkbox).toBeChecked()
  expect(colorButton).not.toBeEnabled()

  //event click 
  fireEvent.click(checkbox)

  //return initial state
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()

})

test('button is grey when disabled', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: /change/i })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  //initial state
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // change to blue
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // disabled
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' })

  //enable again with previous color
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // change to red
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

})






















// test('renders learn react link', () => {
//   render(<App />);
//   //looks in DOM by any element displayed as the regex on getByRole
//   // role are based on role by W3 you can add role to div for example
//   const linkElement = screen.getByRole('link', { name: /learn react/i });
//   //assertion expression, test expression
//   expect(linkElement).toBeInTheDocument();
// });
