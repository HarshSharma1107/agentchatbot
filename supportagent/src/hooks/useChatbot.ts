import { useState } from 'react';
import { queryCDPDocs } from '../services/queryCDPDocs';

interface ChatMessage {
  question: string;
  answer: string;
}

const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const askQuestion = async (platform: string, question: string) => {
    const answers = await queryCDPDocs(platform, question);
    setChatHistory((prev) => [...prev, { question, answer: answers[0] }]);
  };

  return { chatHistory, askQuestion };
};

export default useChatbot;
