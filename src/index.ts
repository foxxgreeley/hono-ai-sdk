import {Hono} from 'hono'
import {createGateway, generateText} from "ai";
import {env} from 'hono/adapter'

const app = new Hono<{ Bindings: Env }>()

app.get('/', async (c) => {
    const {AI_GATEWAY_API_KEY} = env<{ AI_GATEWAY_API_KEY: string }>(c)

    const gateway = createGateway({
        apiKey: AI_GATEWAY_API_KEY,
    });

    const {text} = await generateText({
        model: gateway('meta/llama-3.1-8b'),
        prompt: 'Write a poem.',
    });

    return c.text(text)
})

export default app

