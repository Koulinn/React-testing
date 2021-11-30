import { render, screen } from '../../../test-utils/testing-library'
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import { OrderDetailsProvider } from '../../../contexts/OrderDetails'

test('update scoop subtotal when scoops change', async () => {
    render(<Options optionType="scoops" />)

    //initial state
    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false })
    expect(scoopsSubtotal).toHaveTextContent('0.00')

    //each scoop costs 2
    //vanilla 1 scoop test
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, '1')
    expect(scoopsSubtotal).toHaveTextContent('2.00')

    // add more 2 chocolate
    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' })
    userEvent.clear(chocolateInput)
    userEvent.type(chocolateInput, '2')
    expect(scoopsSubtotal).toHaveTextContent('6.00')
})