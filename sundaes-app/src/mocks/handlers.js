import { rest } from 'msw'
import config from '../config'

const { SERVER_URL } = config

console.log(SERVER_URL)

export const handlers = [
    rest.get(`${SERVER_URL}scoops`, (req, res, ctx) => {
        return res(
            ctx.json([
                { name: 'Chocolate', imagePath: '/images/chocolate.png' },
                { name: 'Vanilla', imagePath: '/images/vanilla.png' },

            ])
        )
    })
]