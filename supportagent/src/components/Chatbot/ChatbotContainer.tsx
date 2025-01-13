import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';
import useChatbot from '../../hooks/useChatbot';

const ChatbotContainer: React.FC = () => {
  const { chatHistory, askQuestion } = useChatbot();
  const [platform, setPlatform] = useState('Segment');

  const handleSendMessage = (message: string) => {
    askQuestion(platform, message);
  };

  return (
    <div>
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="Segment">Segment</option>
        <option value="mParticle">mParticle</option>
        <option value="Lytics">Lytics</option>
        <option value="Zeotap">Zeotap</option>
      </select>
      <ChatOutput messages={chatHistory.map((c) => `${c.question}: ${c.answer}`)} />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatbotContainer;
