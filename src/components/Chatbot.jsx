'use client';
import { useState } from 'react';

export default function Chatbot() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            const botMessage = { role: 'assistant', content: data.reply || 'No response.' };
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error('Error sending message:', err);
            setMessages((prev) => [...prev, { role: 'assistant', content: 'Error getting response' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto space-y-4">
            <div className="h-96 overflow-y-auto border p-4 rounded bg-gray-50">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded ${msg.role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
                            {msg.content}
                        </span>
                    </div>
                ))}
                {loading && <div className="text-sm text-gray-400">Thinking...</div>}
            </div>

            <textarea
                className="w-full border p-2 rounded"
                rows="2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
            />
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                onClick={sendMessage}
                disabled={loading}
            >
                Send
            </button>
        </div>
    );
}

