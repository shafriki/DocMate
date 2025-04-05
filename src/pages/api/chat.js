// Backend API route (Node.js serverless function)
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
        // 'HTTP-Referer': 'http://localhost:3000', // Your site URL
        'X-Title': 'DocMate', // Optional name
    },
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: 'No message provided' });
    }

    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'google/gemma-3-1b-it:free',
            messages: [{ role: 'user', content: message }],
        });

        const reply = chatCompletion.choices?.[0]?.message?.content;
        res.status(200).json({ reply });
        console.log(reply);
    } catch (error) {
        console.error('OpenRouter API error:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
