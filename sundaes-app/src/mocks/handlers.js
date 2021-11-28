import { rest } from 'msw'
import config from '../config'

const { SERVER_URL } = config


export const handlers = [
    rest.get(`${SERVER_URL}scoops`, (req, res, ctx) => {
        return res(
            ctx.json([
                { name: 'Chocolate', imagePath: '/images/chocolate.png' },
                { name: 'Vanilla', imagePath: '/images/vanilla.png' },

            ])
        )
    }),
    rest.get(`${SERVER_URL}toppings`, (req, res, ctx) => {
        return res(
            ctx.json([
                { name: 'Cherries', imagePath: '/images/cherries.png' },
                { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
                { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' }
            ])
        )
    })


]