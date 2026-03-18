'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: getGreeting(),
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNudge(!isOpen);
    }, 12000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning! How can I help you today?';
    if (hour < 18) return 'Good afternoon! What can I assist you with?';
    return 'Good evening! What can I help you with?';
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  function getBotResponse(userInput: string): string {
    if (
      userInput.includes('price') ||
      userInput.includes('cost') ||
      userInput.includes('plan')
    ) {
      return 'We offer flexible pricing for all business sizes. Free plan to start, then scale as you grow. Would you like to see our pricing details?';
    }
    if (userInput.includes('feature') || userInput.includes('can')) {
      return 'AgeniKAI includes AI agents, CRM, automation, voice cloning, and content creation. All in one platform. What feature interests you most?';
    }
    if (userInput.includes('demo') || userInput.includes('try')) {
      return 'I can help you schedule a demo! We have quick 15-minute walkthroughs available. Would you like to book one?';
    }
    if (userInput.includes('security') || userInput.includes('safe')) {
      return 'Security is our priority. We use AES-256 encryption, TLS 1.3, MFA, and are SOC 2 Type II compliant. Your data is safe with us.';
    }
    if (userInput.includes('integr')) {
      return 'We integrate with Stripe, WhatsApp, Slack, Zapier, and REST APIs. Need a specific integration? Let me know!';
    }
    return 'Great question! I can help with information about features, pricing, demos, security, or integrations. What interests you?';
  }

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      {showNudge && !isOpen && (
        <div className="chat-nudge">
          <span>Need help?</span>
          <button onClick={() => setIsOpen(true)}>✕</button>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="chat-icon">💬</span>
        <span className="close-icon">✕</span>
      </button>

      <div className="chat-window">
        <div className="chat-win-header">
          <h4>AgeniKAI Concierge</h4>
          <div className="chat-win-status">
            <div className="online-dot"></div>
            <span>Always available</span>
          </div>
        </div>

        <div className="chat-win-body">
          {messages.map((message) => (
            <div key={message.id} style={{ marginBottom: '0.8rem' }}>
              {message.isBot ? (
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: 'var(--cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      color: '#fff',
                      minWidth: '24px',
                    }}
                  >
                    AI
                  </div>
                  <div
                    className="mini-bubble bot"
                    style={{ flex: 1, marginTop: '2px' }}
                  >
                    {message.text}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    className="mini-bubble"
                    style={{
                      background: 'rgba(6,182,212,0.12)',
                      borderColor: 'rgba(6,182,212,0.2)',
                      color: 'var(--cyan)',
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: 'var(--cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  color: '#fff',
                  minWidth: '24px',
                }}
              >
                AI
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--cyan)',
                    animation: 'dotPulse 1.4s infinite',
                  }}
                />
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--cyan)',
                    animation: 'dotPulse 1.4s infinite 0.2s',
                  }}
                />
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--cyan)',
                    animation: 'dotPulse 1.4s infinite 0.4s',
                  }}
                />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-win-input">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage} aria-label="Send message">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
