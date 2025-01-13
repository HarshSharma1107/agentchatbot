import express, { Request, Response } from 'express';
import cors from 'cors';
import { fetchDocumentation } from '../services/queryDocs';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/query', async (req: Request, res: Response): Promise<void> => {
  const { platform, query } = req.query as { platform: string; query: string };

  if (!platform || !query) {
    res.status(400).json({ error: 'Platform and query are required' });
    return;
  }

  try {
    const results = await fetchDocumentation(platform, query);
    res.json(results);
  } catch (error) {
    console.error('Error fetching documentation:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
