import React from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

const ChatbotContainer: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  const handleNewMessage = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div>
      <ChatOutput messages={messages} />
      <ChatInput onSend={handleNewMessage} />
    </div>
  );
};

export default ChatbotContainer;
