import { useState } from 'react';
import { queryCDPDocs } from '../services/queryCDPDocs';

const useChatbot = () => {
  const [responses, setResponses] = useState<string[]>([]);

  const askQuestion = async (platform: string, question: string) => {
    const answer = await queryCDPDocs(platform, question);
    setResponses((prev) => [...prev, answer]);
  };

  return { responses, askQuestion };
};

export default useChatbot;
