import React from 'react';

interface ChatOutputProps {
  messages: string[];
}

const ChatOutput: React.FC<ChatOutputProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ChatOutput;
