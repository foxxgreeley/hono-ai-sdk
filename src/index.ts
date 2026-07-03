import {Hono} from 'hono'
import {createGateway, generateText} from "ai";

type Bindings = {
    AI_GATEWAY_API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
    const {AI_GATEWAY_API_KEY} = c.env
    if (!AI_GATEWAY_API_KEY) {
        return c.text('AI_GATEWAY_API_KEY is not set in the environment variables.')
    }

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

