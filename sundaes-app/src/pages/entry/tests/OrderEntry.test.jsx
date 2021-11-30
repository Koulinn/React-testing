import { render, screen, waitFor } from '../../../test-utils/testing-library'
import OrderEntry from '../OrderEntry'
import { rest } from 'msw'
import { server } from '../../../mocks/server.js'
import config from '../../../config'

const { SERVER_URL } = config

test('handles error for scoops and toppings routes', async () => {
    server.resetHandlers(
        rest.get(`${SERVER_URL}scoops`, (req, res, ctx) =>
            res(ctx.status(500))
        ),
        rest.get(`${SERVER_URL}toppings`, (req, res, ctx) =>
            res(ctx.status(500))
        )
    )

    render(<OrderEntry />)
    await waitFor(async () => {

        const alerts = await screen.findAllByRole('alert'
            // , {
            //     name: 'An unexpected error ocurred. Please try again later.'
            // }
        )

        expect(alerts).toHaveLength(2)
    })
})