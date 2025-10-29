import React, { useState, useEffect, useRef } from 'react';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { PaperAirplaneIcon } from './icons/PaperAirplaneIcon';
import { XMarkIcon } from './icons/XMarkIcon';

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can we help you today?", sender: 'agent' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const agentResponse: Message = { text: "Thanks for your message! An agent will be with you shortly.", sender: 'agent' };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white rounded-full p-4 shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          aria-label="Open chat"
          style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
        >
          <ChatBubbleIcon className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-50 w-full sm:max-w-sm h-full sm:h-auto sm:max-h-[80vh] bg-white rounded-lg shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-y-0' : 'transform translate-y-full sm:translate-y-[calc(100%+20px)]'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <header className="bg-orange-600 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="font-bold text-lg">Chat with us</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="hover:bg-orange-700 p-1 rounded-full">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </header>

        {/* Messages */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                    msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
             <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input */}
        <footer className="p-4 border-t bg-white rounded-b-lg">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Chat message input"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 disabled:bg-gray-400"
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="h-6 w-6" />
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};

export default LiveChatWidget;