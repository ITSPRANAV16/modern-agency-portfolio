import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not set in the environment variables.' });
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const formattedMessages = messages.map((m: any) => ({
        role: m.sender === 'bot' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      // Find the last user message, the rest goes into history
      const lastMessage = formattedMessages.pop();

      const chat = ai.chats.create({
        model: 'gemini-3.5-flash',
        config: {
          systemInstruction: "You are the Delta Dev's assistant, a helpful, professional agent that helps users scale their business, answering queries about software solutions, mobile apps, and other services. Keep your answers concise, engaging, and professional.",
        }
      });

      // Restore history if any
      if (formattedMessages.length > 0) {
        // GenAI SDK doesn't directly support setting history in chats.create anymore? Wait, let's just use generateContent with concatenated messages.
        const contents = [...formattedMessages, lastMessage];
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: contents,
            config: {
               systemInstruction: "You are the Delta Dev's assistant, a helpful, professional agent that helps users scale their business, answering queries about software solutions, mobile apps, and other services. Keep your answers concise, engaging, and professional.",
            }
        });
        return res.json({ text: response.text });
      } else {
        const response = await chat.sendMessage({ message: lastMessage.parts[0].text });
        return res.json({ text: response.text });
      }
      
    } catch (error: any) {
      console.error('Gemini error:', error);
      res.status(500).json({ error: 'Failed to process chat message.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
