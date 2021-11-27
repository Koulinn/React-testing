import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm, { checkboxInnerText, buttonInnerText, popOverInnerText, termsConditionsText } from '../SummaryForm';
import userEvent from '@testing-library/user-event'

/*
===== Tests =====
checkbox default -> unchecked
checkbox is checked and button is enabled
unchecking disables btn
*/

describe('test SummaryForm component', () => {

    test('should checkbox be unchecked by default', () => {
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox', { name: checkboxInnerText })

        expect(checkbox).not.toBeChecked()

    })

    test('should button be disabled on checkbox unchecked', () => {
        render(<SummaryForm />)

        const button = screen.getByRole('button', { name: buttonInnerText })
        expect(button).toBeDisabled()

    })
    test('should button be enabled on checkbox checked and then change after second click', () => {
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox', { name: checkboxInnerText })
        const button = screen.getByRole('button', { name: buttonInnerText })
        userEvent.click(checkbox)
        expect(checkbox).toBeChecked()
        expect(button).toBeEnabled()

        userEvent.click(checkbox)
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
    })

    test('popover responds to hover', async () => {
        render(<SummaryForm />)
        //starts d-none
        const nullPopover = screen.queryByText(popOverInnerText)
        expect(nullPopover).not.toBeInTheDocument()

        //appear on mouse hover
        const termsAndConditions = screen.getByText(termsConditionsText)
        userEvent.hover(termsAndConditions)

        const popover = screen.getByText(popOverInnerText)
        expect(popover).toBeInTheDocument()
        //disappears when mouse out
        // popover disappears asynchronously this 
        userEvent.unhover(termsAndConditions)
        await waitForElementToBeRemoved(() => screen.queryByText(popOverInnerText))
    })

})
