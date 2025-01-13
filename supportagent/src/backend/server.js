import express from 'express';
import cors from 'cors';
import { fetchDocumentation } from './services/queryDocs.js';
import { generateAnswer } from './nlpService.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/**
 * API endpoint to query documentation and generate an answer.
 *
 * @param {string} platform - The name of the platform (e.g., Segment)
 * @param {string} query - The user's question
 * @returns {object} - JSON response containing the generated answer
 */
app.get('/api/query', async (req, res) => {
  const { platform, query } = req.query;

  try {
    if (!platform || !query) {
      return res.status(400).json({ error: 'Platform and query are required' });
    }

    const documentation = await fetchDocumentation(platform, query);
    const answer = await generateAnswer(query, documentation);

    res.json({ answer });
  } catch (error) {
    console.error('Error generating answer:', error);
    res.status(500).json({ error: 'Failed to generate answer' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});