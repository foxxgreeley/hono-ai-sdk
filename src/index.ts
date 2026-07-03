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
        model: gateway('zai/glm-4.7-flash'),
        prompt: 'Write a greeting.',
    });

    return c.text(text)
})

export default app

