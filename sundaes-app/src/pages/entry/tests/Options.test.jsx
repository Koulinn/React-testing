import { render, screen } from '../../../test-utils/testing-library'
import { OrderDetailsProvider } from '../../../contexts/OrderDetails'
import Options from '../Options'

test('displays image for each scoop option from server', async () => {
    render(<Options optionType="scoops" />)

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(scoopImages).toHaveLength(2)

    const altText = scoopImages.map(e => e.alt)
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('display image for each topping option from server', async () => {
    render(<Options optionType="toppings" />)

    const toppingImgs = await screen.findAllByRole('img', { name: /topping$/i })
    expect(toppingImgs).toHaveLength(3)

    const altText = toppingImgs.map(e => e.alt)
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
})