import { ChatProps } from '@/app/account/types/stream_types';
import { useEffect, useRef } from 'react';

const Chat = ({ messages }: ChatProps) => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 no-scrollbar overflow-y-auto p-4 space-y-3">
      {messages.map((message) => (
        <div key={message.id} className="animate-fadeIn">
          <div className="flex items-start">
            <div className="font-semibold text-[13px] text-orange-400 mr-2">{message.user}:</div>
            <div className="flex-1 text-[11px]">{message.text}</div>
            <div className="text-xs text-gray-500 ml-2">{message.timestamp}</div>
          </div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default Chat;