import React, { useState, useEffect, useRef } from 'react';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { PaperAirplaneIcon } from './icons/PaperAirplaneIcon';
import { XMarkIcon } from './icons/XMarkIcon';

interface Message {
  text: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const formatTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState({ user: false, agent: false });
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can we help you today?", sender: 'agent', timestamp: formatTime() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<number | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    setIsTyping({ user: false, agent: true });

    const userMessage: Message = { text: inputValue, sender: 'user', timestamp: formatTime() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const agentResponse: Message = { text: "Thanks for your message! An agent will be with you shortly.", sender: 'agent', timestamp: formatTime() };
      setMessages(prev => [...prev, agentResponse]);
      setIsTyping(prev => ({...prev, agent: false}));
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
    }

    if (value.trim() !== '' && !isTyping.agent) {
        setIsTyping(prev => ({ ...prev, user: true }));
        typingTimeoutRef.current = window.setTimeout(() => {
            setIsTyping(prev => ({ ...prev, user: false }));
        }, 1200);
    } else {
        setIsTyping(prev => ({ ...prev, user: false }));
    }
  };


  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="font-bold text-lg">Chat with us</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="hover:bg-blue-700 p-1 rounded-full">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </header>

        {/* Messages */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                    msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                 <span className="text-xs text-gray-400 mt-1 px-1">
                  {msg.sender === 'user' ? 'Sent' : 'Delivered'} at {msg.timestamp}
                </span>
              </div>
            ))}
            {isTyping.agent && (
              <div className="flex items-center space-x-1.5 p-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
              </div>
            )}
             {isTyping.user && (
              <div className="flex items-center justify-end">
                  <p className="text-xs text-gray-500 italic">typing...</p>
              </div>
            )}
             <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input */}
        <footer className="p-4 border-t bg-white rounded-b-lg">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Chat message input"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:bg-gray-400"
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