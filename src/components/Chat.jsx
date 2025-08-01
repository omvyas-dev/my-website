import React from 'react';
import chat from '../images/chat.svg'; // Replace with your image

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-lg shadow-sm">
      {/* Placeholder Image */}
      <img
        src={chat}
        alt="Chat Placeholder"
        className="w-124 h-136 mb-4 opacity-60"
      />

      {/* Message */}
    
    </div>
  );
}
